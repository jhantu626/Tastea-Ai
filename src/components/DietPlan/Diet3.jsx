import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Diet3 = ({setStep}) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>setStep(prev=>prev-1)}>
          <Text>Back</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Diet3

const styles = StyleSheet.create({})