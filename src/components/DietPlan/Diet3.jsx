import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const dietGoals = [
  // Weight Management
  'Lose Weight',
  'Maintain Weight',
  'Gain Weight',
  'Reduce Risk',
  'Improve Mobility',
  'Boost Confidence',
  'Improve Appearance',

  // Health Improvement
  'Manage Diabetes',
  'Heart Health',
  'Manage GI',
  'Kidney Support',
  'Avoid Allergens',
  'Boost Energy',
  'Gut Health',
  'Reduce Inflammation',
  'Address Deficiencies',
  'Support Recovery',

  // Performance and Fitness
  'Optimize Performance',
  'Build Muscle',
  'Improve Endurance',
  'Boost Strength',
  'Enhance Recovery',

  // Lifestyle & Personal Goals
  'Better Habits',
  'Cook Healthy',
  'Align Values',
  'Improve Image',
  'Eat Mindfully',
  'Plan Meals',
];

const Diet3 = ({setStep, selectedDietGoal, setSelectedDietGoal}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontFamily: fonts.semiBold,
          color: colors.fontColor1,
        }}>
        Diet Goal
      </Text>
      <View style={styles.parentItems}>
        {dietGoals.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (selectedDietGoal.includes(item)) {
                  setSelectedDietGoal(prev =>
                    prev.filter(prevItem => prevItem !== item),
                  );
                  return;
                } else {
                  setSelectedDietGoal(prev => [...prev, item]);
                }
              }}
              style={[
                styles.content,
                selectedDietGoal.includes(item) ? styles.contentSelected : {},
              ]}>
              <Text style={[styles.itemText]}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setStep(prev => prev - 1)}
          style={[styles.btn, {backgroundColor: colors.fontColor1}]}>
          <Text style={{fontSize: 16, color: '#fff', fontFamily: fonts.medium}}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (selectedDietGoal.length===0) {
              Toast.show({
                title: 'Warning',
                type: ALERT_TYPE.WARNING,
                textBody: 'Select A Goal Option',
                titleStyle: {
                  fontFamily: fonts.semiBold,
                },
                textBodyStyle: {
                  fontSize: 16,
                  fontFamily: fonts.medium,
                  color: colors.fontColor1,
                },
              });
              return;
            } else {
              setStep(prev => prev + 1);
            }
          }}
          style={[styles.btn, {backgroundColor: colors.greenColorTheme}]}>
          <Text style={{fontSize: 16, color: '#fff', fontFamily: fonts.medium}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    width: '48%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  itemText: {
    fontFamily: fonts.medium,
    color: '#fff',
  },
  contentSelected: {
    backgroundColor: colors.greenColorTheme,
  },
  content: {
    width: '48%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.fontColor1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.fontColor1,
  },
  parentItems: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  container: {
    gap: 10,
  },
});

export default Diet3;
