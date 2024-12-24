import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import { Plus } from "../../assets/icons/Plus"
import DropShadow from "react-native-drop-shadow"

export default function AddBookCard({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        style={styles.addCard}
        colors={[
          "#3F425C",
          "rgba(115, 92, 139, .845)",
          "rgba(203, 192, 172, .5)",
        ]}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 1.5, y: 1 }}
      >
        <DropShadow
          style={{
            zIndex: 2,
            paddingBottom: 17,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
        >
          <Plus />
        </DropShadow>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  addCard: {
    width: 166,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
