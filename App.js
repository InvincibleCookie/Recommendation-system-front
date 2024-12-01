import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigate from "./src/app/navigate";

const loadFonts = async () => {
  await Font.loadAsync({
    "cs-black": require("./assets/fonts/CircularStd-Black.ttf"),
    "os-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "os-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({});
