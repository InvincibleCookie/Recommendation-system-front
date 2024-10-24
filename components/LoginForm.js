import { StyleSheet, View, Text } from 'react-native'
import { gStyle } from '../styles/style'
import LoginButton from './LoginButton'
import InputIcon from './InputIcon'
import { User } from '../assets/icons/User'
import { Password } from '../assets/icons/Password'

export default function LoginForm() {
  return (
    <View style={gStyle.loginForm}>
        <View style={{ gap: 15 }}>
            <InputIcon placeholder='Login' Icon={User} />
            <InputIcon placeholder='Password' Icon={Password} />
        </View>
        <View style={{ gap: 12 }}>
          <LoginButton title={'Log In'} onPress={() => console.log('submit')} />
          <Text style={gStyle.subTitle}>Forgot password?</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
