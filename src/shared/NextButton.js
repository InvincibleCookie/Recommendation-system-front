import { StyleSheet, View, Text } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"


export default function NextButton({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>Next</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        marginHorizontal: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 53,
        backgroundColor: '#DE8370',
    },
    text: {
        color: '#25153A',
        fontFamily: 'cs-black',
        fontSize: 15
    }
})