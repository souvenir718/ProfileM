import Main from './src/screens/Main'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'NPS-Bold': require('./assets/fonts/NPSfont_bold.ttf'),
        'NPS-regular': require('./assets/fonts/NPSfont_regular.ttf'),
      })
    }
    loadFonts()
  }, [])

  return <Main />
}
