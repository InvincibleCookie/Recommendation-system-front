import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  SafeAreaView
} from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import { gStyle } from '../styles/style'

export default function Recommendations() {
  const [books, setBooks] = useState([
    { key: '1', img: 'https://cdn1.ozone.ru/s3/multimedia-c/6895272036.jpg' },
    { key: '2', img: 'https://static10.labirint.ru/books/884693/cover.jpg' },
    { key: '3', img: 'https://avatars.mds.yandex.net/i?id=652f57ea7ceb4c732bf71c8fc74e4133_l-10870279-images-thumbs&n=13' },
    { key: '4', img: 'https://img.fusedlearning.com/img/humanities/217/imperialism-viewed-through-kokoro.jpg' },
    { key: '5', img: 'https://i.pinimg.com/736x/32/e9/32/32e932a5b352f628510d43980f4e5458.jpg' },
    { key: '6', img: 'https://avatars.mds.yandex.net/i?id=389e3e59efac547f2305717a03af957f_l-12896214-images-thumbs&n=13' },
  ])

  return (
    <View style={gStyle.main}>
      <ImageBackground style={gStyle.bgImg} source={require('../assets/bg/bgRecs.png')}>
        <SafeAreaView style={{ marginHorizontal: 22, marginBottom: 50 }}>
          <Text style={[gStyle.title, {textAlign: 'left', marginBottom: 24}]}>
            Discover your
            <Text style={{ color: '#DAA3F0' }}> ReadRecs</Text>
          </Text>
          <FlatList
            style={{height: '100%'}}
            data={books}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            keyExtractor={item => item.key}
            renderItem={({item}) => (
              <DropShadow
                  style={{
                    paddingBottom: 17,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 7
                  }}
                >
                <Image
                  borderRadius={10}
                  source={{
                    width: 166,
                    height: 250,
                    uri: item.img,
                  }}
                />
              </DropShadow>
          )}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
})