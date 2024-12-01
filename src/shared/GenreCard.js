import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { gStyle } from "../../styles/style"

export default function GenreCard({ name, isActive, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.card, isActive && {borderWidth: 1, borderColor: '#D18CEC'}]}>
            <Text style={[gStyle.text, {fontSize: 12}]}>{name}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#25153A',
        paddingVertical: 7,
        paddingHorizontal: 23,
    }
})
