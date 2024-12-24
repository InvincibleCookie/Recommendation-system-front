import { useState } from "react"
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native"
import { gStyle } from "../../styles/style"
import SelectFavoriteBooks from "../widgets/SelectFavoriteBooks"
import SelectedBooksList from "../widgets/SelectedBooksList"

export default function FavoriteBook({ navigation }) {
    const [isNext, setIsNext] = useState(false)

    const [current, setCurrent] = useState([])

    const toggleCurrent = (book) => {
        const id = book.id
        const res = current.find(item => item.id === id)
        if (res) {
            setCurrent(current.filter(item => item.id !== id))
        } else {
            setCurrent([...current, book])
        }
    }

    return (
        <View style={gStyle.main}>
            <ImageBackground
                style={gStyle.bgImg}
                source={require("../../assets/bg/bgLib.png")}
            >
                {!isNext ? (
                    <SelectFavoriteBooks
                        current={current}
                        toggleCurrent={(book) => toggleCurrent(book)}
                        setIsNext={() => setIsNext(true)}
                    />
                ) : (
                    <SelectedBooksList
                        current={current}
                        navigate={() => navigation.navigate("TabNavigate")}
                    />
                )}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({})