import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { gStyle } from '../styles/style'

export default function LoginButton({ title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        style={gStyle.button}
        colors={['#981F62', '#F96041']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={gStyle.title}>{title}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

})