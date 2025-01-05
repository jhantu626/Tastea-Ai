import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const DietResult = ({
  gender,
  selectedActivity,
  height,
  weight,
  age,
  selectedMeal,
  selectedDietGoal = [],
  setStep,
}) => {
  console.log(selectedActivity);
  let message = 'Your Details:\n';

  message += `Gender: ${gender || 'Not specified'}\n`;
  message += `Activity Level: ${
    selectedActivity ? selectedActivity : 'Not specified'
  }\n`;

  const heightFeet = height?.feet; // use parseInt to convert to number
  const heightInches = height?.inces;

  if (heightFeet !== null && heightInches !== null) {
    message += `Height: ${heightFeet}' ${heightInches}"\n`;
  } else {
    message += 'Height: Not specified\n';
  }

  message += `Weight: ${weight ? weight + ' lbs' : 'Not specified'}\n`;
  message += `Age: ${age || 'Not specified'}\n`;
  message += `Meal Preference: ${selectedMeal || 'Not specified'}\n`;
  message += `Diet Goals: ${
    selectedDietGoal.length > 0 ? selectedDietGoal.join(', ') : 'Not specified'
  }\n`;

  const navigation = useNavigation();

  const handleGenerateBtn = () => {
    navigation.navigate('DietPlanGenerator', {
      gender,
      selectedActivity,
      height,
      weight,
      age,
      selectedMeal,
      selectedDietGoal,
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: fonts.semiBold,
          color: colors.fontColor1,
        }}>
        Selected Values
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontFamily: fonts.medium,
          lineHeight: 25,
          color: colors.fontColor1,
        }}>
        {message}
      </Text>
      <TouchableOpacity
      onPress={handleGenerateBtn}
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.greenColorTheme,
          borderRadius: 10,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: fonts.semiBold,
          }}>
          Generate
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        }}>
        <TouchableOpacity
          onPress={() => setStep(0)}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Change Physical Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setStep(1)}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Change Meal Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setStep(2)}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Change Goals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'center',
  },
  btnContainer: {
    width: '45%',
    height: 50,
    backgroundColor: colors.greenColorTheme,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  container: {
    gap: 10,
  },
});

export default DietResult;
