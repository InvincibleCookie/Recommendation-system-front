import { LinearGradient } from "expo-linear-gradient"
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Image,
    View
} from "react-native"
import { Select } from '../../assets/icons/Select'
import { gStyle } from "../../styles/style"
import DropShadow from "react-native-drop-shadow"

export default function BookCard({ name, uri, isSelected, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <DropShadow
            style={{
                paddingBottom: 17,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 7,
            }}
        >
            {isSelected && (
                <View
                    style={{
                        zIndex: 3,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#00000070',
                        width: 166,
                        height: 250,
                        borderRadius: 10,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#00000050',
                            width: 125,
                            height: 125,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 999,                            
                        }}
                    >
                        <Select />
                    </View>
                </View>
            )}
            <LinearGradient
                style={styles.bookCard}
                colors={["#66666600", "#2A2A2A44", "#00000077"]}
                start={{ x: 0, y: 0.4, }}
                end={{ x: 0, y: 1, }}
            >
                <Text style={[gStyle.text, {fontSize: 15,}]}>{name.length < 20 ? name : `${name.slice(0, 20)}...`}</Text>
            </LinearGradient>
            <Image
                source={{ uri: uri }}
                style={{
                    width: 166,
                    height: 250,
                    borderRadius: 10
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    backgroundColor: 'black',
                    width: 166,
                    height: 250,
                    borderRadius: 10,
                }}
            />
        </DropShadow>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bookCard: {
    position: 'absolute',
    zIndex: 2,
    width: 166,
    height: 250,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 7
  },
})