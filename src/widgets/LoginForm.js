import { StyleSheet, View, Text } from "react-native"
import { gStyle } from "../../styles/style"
import LoginButton from "../shared/LoginButton"
import InputIcon from "../shared/InputIcon"
import { Login } from "../../assets/icons/Login"
import { Password } from "../../assets/icons/Password"
import { Formik } from 'formik'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginForm({ logIn }) {
  const login = (values) => {
    if (values.username && values.password) {
      axios.post('http://2.59.40.149:8000/users/login',
        new URLSearchParams({ 
          username: values.username,
          password: values.password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      .then(({ data }) => {
        AsyncStorage.setItem('access', data.access_token)
        AsyncStorage.setItem('refresh', data.refresh_token)
        logIn()
      })
      .catch(error => {
        console.log(error.response.data)
      })
    }
  }

  return (
    <View>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          login(values)
        }}
      >
        {(props) => (
          <View style={gStyle.loginForm}>
            <View style={{ gap: 15, width: '100%' }}>
              <InputIcon
                placeholder="Username"
                Icon={Login}
                value={props.values.username}
                onChangeText={props.handleChange('username')}
              />
              <InputIcon
                isPassword={true}
                placeholder="Password"
                Icon={Password}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
              />
            </View>
            <View style={{ gap: 12 }}>
              <LoginButton title={"Log In"} onPress={props.handleSubmit} />
              <Text style={gStyle.subTitle}>Forgot password?</Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
