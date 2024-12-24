import {
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native"
import { gStyle } from "../../styles/style"
import SearchInput from "../shared/SearchInput"
import BooksGenres from "../widgets/BooksGenres"
import BookCard from "../shared/BookCard"
import BooksNumber from "../shared/BooksNumber"
import NextButton from "../shared/NextButton"
import { useEffect, useState } from "react"
import axios from "axios"
import BookCardSelect from "../shared/BookCardSelect"
import Button from "../shared/Button"

export default function SelectFavoriteBooks({
    current,
    toggleCurrent,
    setIsNext
}) {
    const [activeGenre, setActiveGenre] = useState()
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [genreBooks, setGenreBooks] = useState([])
    const [search, setSearch] = useState('')
    const [searchBooks, setSearchBooks] = useState([])
    const [isFocus, setIsFocus] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        if (activeGenre) {
            axios.get(`http://2.59.40.149:8000/books?genres=${activeGenre}`)
                .then(({ data }) => {
                    setBooks(data)
                    setIsLoading(false)
                })
                .catch(() => {
                    alert('Не удалось получить книги выбранного жанра')
                })
        }
    }, [activeGenre])

    useEffect(() => {
        axios.get(`http://2.59.40.149:8000/books?titlePattern=%${search}%`)
            .then(({ data }) => {
                setSearchBooks(data)
            })
            .catch(() => {
                alert('Не удалось выполнить поиск')
            })
        
    }, [search])

    useEffect(() => {
        if (current) {
            setGenreBooks(books.filter(item => current.find(book => book.id === item.id)))
        }
    }, [activeGenre, current, books])

    return (
        <>
            {current.length > 0 && (
                <View
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        bottom: 40,
                        right: 20
                    }}
                >
                    <NextButton onPress={setIsNext} />
                </View>
            )}
            <SafeAreaView
                style={{
                    marginHorizontal: 22,
                    marginBottom: 180,
                    gap: 16,
                    height: '100%',
                }}
            >
                <Text style={[gStyle.title, { textAlign: "left" }]}>
                    Pick your
                    <Text style={{ color: "#DE8370" }}> favorite </Text>
                    books
                </Text>
                <View 
                    style={{
                        flexDirection: 'row',
                        gap: 7
                    }}
                >
                    <View style={{ width: activeSearch ? '80%' : '100%' }}>
                        <SearchInput
                            value={search}
                            isFocused={isFocus}
                            onFocus={() => {
                                setIsFocus(true)
                                setActiveSearch(true)
                            }}
                            onBlur={() => setIsFocus(false)}
                            onChangeText={(text) => setSearch(text)}
                        />
                    </View>
                    {activeSearch && (
                        <Button
                            title='Done'
                            onPress={() => {
                                setActiveSearch(false)
                                setSearch('')
                            }}
                        />
                    )}
                </View>
                {activeSearch ? (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={searchBooks}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <BookCardSelect
                                uri={item.coverLink}
                                name={item.title}
                                authors={item.authors}
                                selected={current.find(book => book.id === item.id)}
                                setSelected={() => toggleCurrent(item)}
                            />
                        )}
                    />
                ) : (
                    <>
                        <BooksGenres setGenre={(id) => setActiveGenre(id)} />
                        {!isLoading ? (
                            <>
                                {genreBooks.length > 0 && (
                                    <BooksNumber
                                        selectedNum={genreBooks.length}
                                        fullNum={books.length}
                                    />
                                )}
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={books}
                                    numColumns={2}
                                    columnWrapperStyle={{
                                        justifyContent: "space-between",
                                    }}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <BookCard
                                            name={item.title}
                                            uri={item.coverLink}
                                            isSelected={genreBooks.includes(item)}
                                            onPress={() => toggleCurrent(item)}
                                        />
                                    )}
                                />
                            </>
                        ) : (
                            <View style={{ marginTop: 250 }}>
                                <Text style={gStyle.title}>Loading...</Text>
                            </View>
                        )}
                    </> 
                )}        
            </SafeAreaView>
        </>
    )
}