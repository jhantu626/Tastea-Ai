import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Dropdown} from 'react-native-element-dropdown';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const Diet1 = ({
  setStep,
  gender,
  setGender,
  selectedActivity,
  setSelectedActivity,
  height,
  setHeight,
  weight,
  setWeight,
  age,
  setAge,
}) => {
  const activityValues = [
    {value: 'Little to no exercise'},
    {value: 'Light exercise 1-3 days a week'},
    {value: 'Moderate exercise 3-5 days a week'},
    {value: 'Hard exercise 6-7 days a week'},
    {value: 'Hard exercise or physical job'},
    {value: 'None'},
  ];

  return (
    <View style={{marginVertical: 20, gap: 10}}>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          value={age}
          onChangeText={text => setAge(text)}
          style={styles.inputBox}
          placeholder="Enter Age Here"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            onPress={() => setGender('male')}
            style={[
              styles.gender,
              gender === 'male'
                ? {backgroundColor: '#4CAF50', opacity: 0.5}
                : {},
            ]}>
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender('female')}
            style={[
              styles.gender,
              gender === 'female'
                ? {backgroundColor: '#4CAF50', opacity: 0.5}
                : {},
            ]}>
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender('others')}
            style={[
              styles.gender,
              gender === 'others'
                ? {backgroundColor: '#4CAF50', opacity: 0.5}
                : {},
            ]}>
            <Text style={styles.genderText}>Others</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Height</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            value={height.feet}
            onChangeText={text => setHeight(prev => ({...prev, feet: text}))}
            keyboardType="number-pad"
            placeholder="Feet"
            style={styles.heightInput}
          />
          <TextInput
            value={height.inces}
            onChangeText={text => setHeight(prev => ({...prev, inces: text}))}
            keyboardType="number-pad"
            placeholder="Inces"
            style={styles.heightInput}
          />
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          value={weight}
          onChangeText={text => setWeight(text)}
          style={styles.inputBox}
          placeholder="Enter Weight Here"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.label}>Activites</Text>
        <Dropdown
          data={activityValues}
          labelField={'value'}
          valueField={'value'}
          dropdownPosition="top"
          placeholder="Select Options"
          onChange={item => setSelectedActivity(item.value)}
          value={selectedActivity}
          style={{
            borderColor: colors.headerTextColor,
            borderWidth: 1,
            height: 50,
            padding: 5,
            borderRadius: 10,
          }}
          itemTextStyle={{
            fontFamily: fonts.medium,
            color: colors.headerTextColor,
          }}
          selectedTextStyle={{
            fontFamily: fonts.medium,
            color: colors.headerTextColor,
          }}
          placeholderStyle={{
            fontFamily: fonts.medium,
            color: colors.headerTextColor,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (
            age === '' ||
            gender === '' ||
            weight === '' ||
            height.inces === '' ||
            height.feet===''
          ) {
            Toast.show({
              title: 'Warning',
              type: ALERT_TYPE.WARNING,
              textBody: 'Select All the fields',
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
        style={{
          height: 50,
          backgroundColor: '#4CAF50',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 17,
            color: '#fff',
            fontFamily: fonts.medium,
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heightInput: {
    width: '48%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.headerTextColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  genderText: {
    fontFamily: fonts.semiBold,
  },
  gender: {
    width: '49%',
    height: 50,
    borderColor: colors.fontColor1,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  subContainer: {
    gap: 5,
  },
  label: {
    paddingHorizontal: 5,
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.fontColor1,
  },
  inputBox: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.headerTextColor,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
});

export default Diet1;
