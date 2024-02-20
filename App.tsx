import {SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}
