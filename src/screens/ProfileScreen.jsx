import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
  const {logout}=useContext(AuthContext)
  return (
    <View>
      <TouchableOpacity onPress={async ()=>{
        await logout();
      }}><Text>Logout</Text></TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})