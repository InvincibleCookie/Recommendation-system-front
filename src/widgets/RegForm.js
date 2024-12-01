import { StyleSheet, View, Text } from "react-native"
import { gStyle } from "../../styles/style"
import LoginButton from "../shared/LoginButton"
import InputIcon from "../shared/InputIcon"
import { Login } from "../../assets/icons/Login"
import { Password } from "../../assets/icons/Password"
import { Email } from "../../assets/icons/Email"
import { Formik } from 'formik'
import axios from 'axios'

export default function RegForm({ signUp }) {
  const register = (values) => {
    // if (values.username !== '' && values.email !== '' && values.password !== '') {
    //   axios.post('http://2.59.40.149:8000/users/register',
    //     {
    //       username: values.username,
    //       email: values.email,
    //       password: values.password
    //     },
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then(({status}) => {
    //     if (status === 200) {
          signUp()
    //     }
    //   })
    //   .catch(() => {
    //     console.log('Ошибка')
    //   })
    // }
  }

  return (
    <View>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          register(values)
        }}
      >
        {(props) => (
          <View style={gStyle.loginForm}>
            <View style={{ gap: 15 }}>
              <InputIcon
                placeholder="Username"
                Icon={Login}
                value={props.values.username}
                onChangeText={props.handleChange('username')}
              />
              <InputIcon
                placeholder="Email"
                Icon={Email}
                value={props.values.email}
                onChangeText={props.handleChange('email')}
              />
              <InputIcon
                placeholder="Password"
                Icon={Password}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
              />
            </View>
            <View style={{ gap: 12 }}>
              <LoginButton title={"Sign up"} onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
