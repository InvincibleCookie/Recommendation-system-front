import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { gStyle } from '../styles/style'

export default function Library() {
  return (
    <View style={gStyle.main}>
        <ImageBackground style={gStyle.bgImg} source={require('../assets/bg/bgLib.png')}>
            <Text style={gStyle.title}>
                Update your
                <Text style={{ color: '#DE8370' }}> favorite </Text>
                books
            </Text>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

});