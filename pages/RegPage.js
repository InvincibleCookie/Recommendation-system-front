import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import RegForm from '../components/RegForm'
import { gStyle } from '../styles/style'
import { Logo } from '../assets/icons/Logo'

export default function RegPage({ navigation }) {
  return (
    <View style={gStyle.main}>
        <ImageBackground
            style={[gStyle.bgImg, {justifyContent: 'center', alignItems: 'center'}]}
            source={require('../assets/bg/bgLogin.png')}
        >
            <Logo />
            <View style={{ gap: 5, marginBottom: 30 }}>
                <Text style={gStyle.title}>
                    Book picks just for you.
                </Text>
                <Text style={gStyle.title}>
                    Try for free with
                    <Text style={{ color: '#DAA3F0' }}> ReadRecs</Text>.
                </Text>
            </View>
            <RegForm />
            <View style={{ gap: 7 }}>
                <Text style={[gStyle.subTitle, { marginTop: 35 }]}>Already have an account?</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("LoginPage")}>
                    <Text style={gStyle.link}>Log In</Text>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

})
