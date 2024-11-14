import { StyleSheet, View, Text } from 'react-native'
import { gStyle } from '../styles/style'
import LoginButton from './LoginButton'
import InputIcon from './InputIcon'
import { Login } from '../assets/icons/Login'
import { Password } from '../assets/icons/Password'
import { Email } from '../assets/icons/Email'

export default function RegForm() {
  return (
    <View style={gStyle.loginForm}>
        <View style={{ gap: 15 }}>
            <InputIcon placeholder='Username' Icon={Login} />
            <InputIcon placeholder='Email' Icon={Email} />
            <InputIcon placeholder='Password' Icon={Password} />
        </View>
        <View style={{ gap: 12 }}>
          <LoginButton title={'Sign up'} onPress={() => console.log('submit')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

})
