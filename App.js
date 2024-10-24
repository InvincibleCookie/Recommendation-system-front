import { useState, useEffect } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { gStyle } from './styles/style'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import LoginPage from './pages/LoginPage'

const loadFonts = async () => {
  await Font.loadAsync({ 
    'cs-black': require('./assets/fonts/CircularStd-Black.ttf'), 
    'os-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'os-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
      try {
        await loadFonts()
      } catch (e) {
        console.warn(e)
      } finally {
        setFontsLoaded(true)
        await SplashScreen.hideAsync()
      }
    }

    prepare()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={gStyle.bgImg} source={require('./assets/bg.png')}>
        <LoginPage />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

});
