import { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  SafeAreaView
} from 'react-native'
import { gStyle } from '../../styles/style'
import BookCard from '../shared/BookCard'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Recommendations() {
  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      const token = await AsyncStorage.getItem('access')
      axios.get('http://2.59.40.149:8000/ai/book/all', 
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
        .then(({ data }) => {
          setBooks(data.recommend)
          setIsLoading(false)
        })
        .catch(error => {
          console.log(error.response.data)
          setIsLoading(false)
        })
    }
  
    getData()
  }, [])
  

  return (
    <View style={gStyle.main}>
      <ImageBackground style={gStyle.bgImg} source={require('../../assets/bg/bgRecs.png')}>
        <SafeAreaView style={{ marginHorizontal: 22, marginBottom: 50 }}>
          <Text style={[gStyle.title, {textAlign: 'left', marginBottom: 24}]}>
            Discover your
            <Text style={{ color: '#DAA3F0' }}> ReadRecs</Text>
          </Text>
          {!isLoading ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={books}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <BookCard
                  name={item.title}
                  uri={item.cover_link}
                  // isSelected={genreBooks.includes(item)}
                  // onPress={() => toggleCurrent(item)}
                />
              )}
            />
          ) : (
            <View style={{ marginTop: 250 }}>
              <Text style={gStyle.title}>Loading...</Text>
            </View>
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
})