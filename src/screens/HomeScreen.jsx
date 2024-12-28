import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Breakfast, Category, CtaCard1, Dinner, Header, Launch, Search } from '../components'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const HomeScreen = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{flex: 1, paddingHorizontal: 20,backgroundColor: colors.defaultBgColor}}>
      <Header />
      <Text style={styles.headerText}>What would you like
      to cook today?</Text>
      <Search/>
      <Category />
      <Breakfast/>
      <CtaCard1/>
      <Launch/>
      <Dinner/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontFamily: fonts.medium,
    paddingRight: 20,
    color: colors.headerTextColor
  }
})


export default HomeScreen

