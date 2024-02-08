import {
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'
import React from 'react'

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>
          Hello World!
        </Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : "center"
  },
  whiteText: {
    color: 'white',
  },
  BlackTest: {
    color: 'black',
  },
})
export default AppPro
