import { useState } from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"
import GenreCard from "../shared/GenreCard"

export default function BooksGenres() {
    const [genres, setGenres] = useState([
        {
            key: '1',
            name: 'Fantasy',
            isActive: true,
        },
        {
            key: '2',
            name: 'Romance',
            isActive: false,
        },
        {
            key: '3',
            name: 'Horror',
            isActive: false,
        },
        {
            key: '4',
            name: 'Thriller',
            isActive: false,
        },
        {
            key: '5',
            name: 'Young Adult',
            isActive: false,
        },
        {
            key: '6',
            name: 'Classic',
            isActive: false,
        },
        {
            key: '7',
            name: 'History',
            isActive: false,
        },
        {
            key: '8',
            name: 'Biography',
            isActive: false,
        },
        {
            key: '9',
            name: 'Psychology',
            isActive: false,
        },
        {
            key: '10',
            name: 'Self Help',
            isActive: false,
        },
        {
            key: '11',
            name: 'More genres',
            isActive: false,
        },
    ])

    const chooseGenre = (key) => {
        setGenres(genres.map((item, index) => 
            index === key ? {...item, isActive: true} : {...item, isActive: false}
        ))
    }

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
                            onPress={() => chooseGenre(index)}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
