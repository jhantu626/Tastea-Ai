import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const DietBackground = ({children}) => {
  return (
    <LinearGradient colors={['#f7fff7', '#d4efdf']} style={{flex: 1}}>
        {children}
    </LinearGradient>
  )
}

export default DietBackground