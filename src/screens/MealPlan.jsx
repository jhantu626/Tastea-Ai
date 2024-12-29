import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components'

const MealPlan = () => {
  return (
    <View style={{flex: 1,paddingHorizontal: 20}}>
      <Header title='Meal Plan'/>
    </View>
  )
}

export default MealPlan

const styles = StyleSheet.create({})