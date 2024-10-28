import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { gStyle } from '../styles/style'

export default function Recommendations() {
  return (
    <View style={gStyle.main}>
        <ImageBackground style={gStyle.bgImg} source={require('../assets/bg/bgRecs.png')}>
            <Text style={gStyle.title}>
                Discover your
                <Text style={{ color: '#DAA3F0' }}> ReadRecs</Text>
            </Text>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

});