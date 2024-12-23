import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native"
import LoginForm from "../widgets/LoginForm"
import { gStyle } from "../../styles/style"
import { Logo } from "../../assets/icons/Logo"

export default function LoginPage({ navigation }) {
  return (
    <View style={gStyle.main}>
      <ImageBackground
        style={[
          gStyle.bgImg,
          { justifyContent: "center", alignItems: "center" },
        ]}
        source={require("../../assets/bg/bgLogin.png")}
      >
        <Logo />
        <View style={{ gap: 5, marginBottom: 30 }}>
          <Text style={gStyle.title}>Book picks just for you.</Text>
          <Text style={gStyle.title}>
            Try for free with
            <Text style={{ color: "#DAA3F0" }}> ReadRecs</Text>.
          </Text>
        </View>
        <LoginForm logIn={() => navigation.navigate("TabNavigate")} />
        <View style={{ gap: 7 }}>
          <Text style={[gStyle.subTitle, { marginTop: 35 }]}>
            Don't have an account yet?
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("RegPage")}
          >
            <Text style={gStyle.link}>Create one now</Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({})
