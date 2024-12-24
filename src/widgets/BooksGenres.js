import { useEffect, useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import GenreCard from "../shared/GenreCard"

export default function BooksGenres({setGenre}) {
    const [genres, setGenres] = useState([
        {
            key: 36,
            name: 'Mystery',
            isActive: true,
        },
        {
            key: 38,
            name: 'Fantasy',
            isActive: false,
        },
        {
            key: 41,
            name: 'Historical Fiction',
            isActive: false,
        },
        {
            key: 94,
            name: 'Non-fiction',
            isActive: false,
        },
        {
            key: 126,
            name: 'Classic',
            isActive: false,
        },
    ])

    const chooseGenre = (key) => {
        setGenres(genres.map((item) => 
            item.key === key ? {...item, isActive: true} : {...item, isActive: false}
        ))
    }

    useEffect(() => {
        setGenre((genres.find(item => item.isActive)).key)
    }, [])

    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={genres}
                keyExtractor={(item) => item.key}
                renderItem={({ item, index }) => (
                    <View style={index !== 0 && {marginLeft: 7}}>
                        <GenreCard
                            name={item.name}
                            isActive={item.isActive}
                            onPress={() => {
                                chooseGenre(item.key)
                                setGenre(item.key)
                            }}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
