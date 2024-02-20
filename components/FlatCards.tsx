import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.CardContainer}>
        <ScrollView horizontal={true}>
          <View style={[styles.EachCard, styles.CardOne]}>
            <Text>Card One</Text>
          </View>
          <View style={[styles.EachCard, styles.CardTwo]}>
            <Text>Card Two</Text>
          </View>
          <View style={[styles.EachCard, styles.CardThree]}>
            <Text>Card Three</Text>
          </View>
          <View style={[styles.EachCard, styles.CardThree]}>
            <Text>Card Four</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  CardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  EachCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 5,
  },
  CardOne: {
    backgroundColor: '#638B95',
  },
  CardTwo: {
    backgroundColor: '#00d4ff',
  },
  CardThree: {
    backgroundColor: '#E1742E',
  },
})
