import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const categories = [
  {
    name: 'Vegetarian',
    icon: require('./../../../assets/icons/vegetarian.png'), // Replace with your icon path
  },
  {
    name: 'Vegan',
    icon: require('./../../../assets/icons/vegan.png'), // Replace with your icon path
  },
  {
    name: 'Non-Vegetarian',
    icon: require('./../../../assets/icons/non_vegetarian.png'), // Replace with your icon path
  },
  {
    name: 'Pescatarian',
    icon: require('./../../../assets/icons/pescatarian.png'), // Replace with your icon path
  },
  {
    name: 'Flexitarian',
    icon: require('./../../../assets/icons/flexitarian.png'), // Replace with your icon path
  },
  {
    name: 'Keto',
    icon: require('./../../../assets/icons/keto.png'), // Replace with your icon path
  },
  {
    name: 'Paleo',
    icon: require('./../../../assets/icons/paleo.png'), // Replace with your icon path
  },
  {
    name: 'Gluten-Free',
    icon: require('./../../../assets/icons/gluten_free.png'), // Replace with your icon path
  },
  {
    name: 'Low-Carb',
    icon: require('./../../../assets/icons/low_carb.png'), // Replace with your icon path
  },
  {
    name: 'High-Protein',
    icon: require('./../../../assets/icons/high_protein.png'), // Replace with your icon path
  },
];

const Diet2 = ({setStep}) => {
  const [selectedMeal, setSelectedMeal] = useState('');
  return (
    <View style={{marginVertical: 10}}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: fonts.bold,
          color: colors.fontColor1,
        }}>
        Select Meal Option
      </Text>

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedMeal(item.name)}
              style={[
                styles.category,
                selectedMeal === item.name
                  ? {backgroundColor: 'rgba(76, 175, 80, 0.7)'}
                  : {},
              ]}>
              <Image style={{width: 50, height: 50}} source={item.icon} />
              <Text
                style={[
                  {fontFamily: fonts.semiBold, color: colors.fontColor1},
                  selectedMeal === item.name ? {color: '#fff'} : {},
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.buttonConainer}>
        <TouchableOpacity onPress={()=>setStep(prev=>prev-1)} style={[styles.button,{backgroundColor: colors.fontColor1}]}>
          <Text style={styles.btnTxt}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setStep(prev=>prev+1)} style={[styles.button,{backgroundColor: '#4CAF50'}]}>
          <Text style={styles.btnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnTxt:{
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#fff'
  },
  button: {
    width: '48%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonConainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    gap: 9,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  category: {
    width: '48%',
    height: 100,
    borderWidth: 1,
    borderColor: colors.fontColor1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
  },
});

export default Diet2;
