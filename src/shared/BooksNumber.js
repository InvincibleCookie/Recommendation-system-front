import {
    StyleSheet,
    Text,
    View
} from "react-native"
import { gStyle } from "../../styles/style"

export default function BooksNumber({ selectedNum, fullNum }) {
    return (
        <View
            style={styles.booksNumber}
        >
            <Text style={[gStyle.text, { fontSize: 12 }]}>Your current picks:</Text>
            <Text style={[gStyle.text, { fontSize: 12, color: "#DE8370" }]}>{`${selectedNum}/${fullNum}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  booksNumber: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#25153A',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
})