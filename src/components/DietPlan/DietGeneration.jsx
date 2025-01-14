import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Header from '../Header';
import {colors} from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts } from '../../utils/fonts';


const DietGeneration = () => {
  const route = useRoute();

  // const {
  //   gender,
  //   selectedActivity,
  //   height,
  //   weight,
  //   age,
  //   selectedMeal,
  //   selectedDietGoal,
  // } = route.params;

  // console.log(gender,
  //   selectedActivity,
  //   height,
  //   weight,
  //   age,
  //   selectedMeal,
  //   selectedDietGoal,)

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Header title="Ai Plan" />
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}></ScrollView>
        <View style={styles.textContainer}>
          <TextInput placeholder='Enter Query' style={styles.queryInput}/>
          <TouchableOpacity style={styles.sendBtn}>
            <Ionicons name="paper-plane" size={28}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {
  },
  sendBtn:{
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: colors.fontColor1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  queryInput: {
    width: '85%',
    height: "100%",
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.fontColor1
  }
});

export default DietGeneration;
