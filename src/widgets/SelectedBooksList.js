import { useEffect, useState } from "react"
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native"
import { Trash } from "../../assets/icons/Trash"
import { gStyle } from "../../styles/style"
import Button from "../shared/Button"
import BookCardSelect from "../shared/BookCardSelect"
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SelectedBooksList({ current, navigate }) {
    const [selected, setSelected] = useState(current.map(item => ({...item, isSelected: false})))
    const [marked, setMarked] = useState([])
    const [isSelect, setIsSelect] = useState(false)

    const toggleSelected = (book) => {
        const id = book.id
        setSelected(selected.map(item => item.id === id ?
            ({...item, isSelected: !item.isSelected}) : item))
        const res = marked.find(item => item.id === id)
        if (res) {
            setMarked(marked.filter(item => item.id !== id))
        } else {
            setMarked([...marked, book])
        }
    }

    useEffect(() => {
        if (selected.length === marked.length) {
            setIsSelect(true)
        } else if (marked.length === 0) {
            setIsSelect(false)
        }
    }, [selected, marked])

    const selectAll = () => {
        setSelected(selected.map(item => ({...item, isSelected: true})))
        setMarked([...selected])
    }

    const deselectAll = () => {
        setSelected(selected.map(item => ({...item, isSelected: false})))
        setMarked([])
    }

    const handleDelete = () => {
        setSelected(selected.filter(book => {
            const id = book.id
            const res = marked.find(item => item.id === id)
            if (!res) {
                return book
            }
        }))
        setMarked([])
    }

    const completeReg = async () => {
        const likes = selected.map(item => ({ id: item.id }))
        const token = await AsyncStorage.getItem('access')
        axios.post('http://2.59.40.149:8000/users/books/like/bulk',
            likes,
            {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(({status}) => {
                console.log(status)
                if (status === 200) {
                    navigate()
                }
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <SafeAreaView style={{ marginHorizontal: 22, marginBottom: 170, gap: 16 }}>
                <Text style={[gStyle.title, { textAlign: "left" }]}>
                    Your current picks
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {!isSelect ? (
                        <Button
                            title='Select All'
                            onPress={() => {
                                selectAll()
                                setIsSelect(true)
                            }}
                        />
                    ) : (
                        <Button
                            title='Deselect All'
                            onPress={() => {
                                deselectAll()
                                setIsSelect(false)
                            }}
                        />
                    )}
                    <Button title='Done' onPress={completeReg} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={selected}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <BookCardSelect
                            uri={item.coverLink}
                            name={item.title}
                            authors={item.authors}
                            selected={item.isSelected}
                            setSelected={() => toggleSelected(item)}
                        />
                    )}
                />
            </SafeAreaView>
            <View
                style={{
                    width: '100%',
                    backgroundColor: '#7E797433',
                    paddingTop: 16,
                    paddingBottom: 24,
                    paddingHorizontal: 35,
                    position: 'absolute',
                    zIndex: 2,
                    bottom: 0
                }}
            >
                <Trash
                    color={marked.length > 0 ? '#F86041' : '#7E7974'}
                    onPress={handleDelete}
                />
            </View>
        </View>
    )
}