import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Header } from '../components'

const ProfileScreen = () => {
  const {logout}=useContext(AuthContext)
  return (
    <View style={{flex: 1,paddingHorizontal: 20}}>
      <Header title='Profile'/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})