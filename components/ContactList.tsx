import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {EmployeeData} from '../constants/contactData'

export default function ContactList() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.EmployeesContainer} scrollEnabled={true}>
        {EmployeeData.map((EachEmployeeData, key) => {
          return (
            <View key={key} style={styles.EmployeeCard}>
              <Image
                source={{uri: EachEmployeeData.imageUrl}}
                style={styles.EmployeeImage}
              />
              <View style={styles.EmployeeText}>
                <Text style={styles.EmployeeName}>{EachEmployeeData.name}</Text>
                <Text style={styles.EmployeeGender}>
                  {EachEmployeeData.gender}
                </Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  headingText: {
    fontSize: 23,
    fontWeight: '400',
  },
  EmployeesContainer: {
    padding: 10,
  },
  EmployeeCard: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#020122',
    borderRadius: 7,
    flex: 1,
    flexDirection: 'row',
  },
  EmployeeImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  EmployeeText: {
    marginLeft: 16,
    flex: 1,
  },
  EmployeeName: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500',
  },
  EmployeeGender: {
    fontSize: 16,
    fontWeight: '300',
    color: 'gray',
  },
})
