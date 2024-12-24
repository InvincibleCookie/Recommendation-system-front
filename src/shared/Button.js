import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Text
} from "react-native"

export default function Button({ title, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 11,
        backgroundColor: '#25153A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'as-regular',
        fontSize: 15,
        color: '#7E7974'
    }
})