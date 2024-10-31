import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native'
import { gStyle } from '../styles/style'

export default function Library() {
  const [books, setBooks] = useState([
    { key: '1', img: 'https://avatars.mds.yandex.net/i?id=e6e96eb20039d949bf535cbf3884a501_l-4391775-images-thumbs&n=13' },
    { key: '2', img: 'https://www.wanderluluu.com/wp-content/uploads/2021/11/34.png' },
    { key: '3', img: 'https://cdn1.ozone.ru/multimedia/1026320353.jpg' },
  ])

  return (
    <View style={gStyle.main}>
        <ImageBackground style={gStyle.bgImg} source={require('../assets/bg/bgLib.png')}>
          <SafeAreaView style={{ marginHorizontal: 22, marginBottom: 50 }}>
            <Text style={[gStyle.title, {textAlign: 'left', marginBottom: 24}]}>
              Update your
              <Text style={{ color: '#DE8370' }}> favorite </Text>
              books
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
                <View style={{paddingBottom: 17}}>
                  <Image
                    borderRadius={10}
                    source={{
                      width: 166,
                      height: 250,
                      uri: item.img,
                    }}
                  />
                </View>
              )}
            />
          </SafeAreaView>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

})