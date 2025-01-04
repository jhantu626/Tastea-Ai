import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header } from '../components'
import { fonts } from '../utils/fonts'
import { colors } from '../utils/colors'
import { responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const DietPlan = () => {
  const navigation=useNavigation();
  return (
    <View style={{flex: 1,paddingHorizontal: 20}}>
      <Header title='DietPlan'/>
        <Text style={styles.headerText}>Get Your Customized Diet Plan</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("DietPlanCreator")
        }} style={styles.dietPalnBtn}>
          <Text style={styles.btnTxt}>Create a Diet Plan</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontFamily: fonts.bold,
    color: colors.headerTextColor
  },
  dietPalnBtn: {
    width: responsiveWidth(80),
    height: 80,
    backgroundColor: '#DAF7A6',
    alignSelf: 'center',
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  btnTxt: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: colors.fontColor1
  }
})


export default DietPlan

