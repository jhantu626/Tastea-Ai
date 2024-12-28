import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const ComponentHeader = ({title,pageName}) => {
  return (
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22, fontFamily: fonts.medium}}>{title}</Text>
        <TouchableOpacity>
          <Text style={{fontFamily: fonts.medium, color: colors.theme}}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default ComponentHeader

const styles = StyleSheet.create({})