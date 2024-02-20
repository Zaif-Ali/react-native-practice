import {SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
// import FlatCards from './components/FlatCards'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards/> */}
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}
