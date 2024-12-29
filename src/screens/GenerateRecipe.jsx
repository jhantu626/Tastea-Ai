import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components'

const GenerateRecipe = () => {
  return (
    <View style={{flex: 1,paddingHorizontal: 20}}>
      <Header title='Ai Recipes'/>
    </View>
  )
}

export default GenerateRecipe

const styles = StyleSheet.create({})