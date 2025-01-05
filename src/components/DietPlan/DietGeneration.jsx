import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const DietGeneration = () => {
  const route = useRoute();

  const {
    gender,
    selectedActivity,
    height,
    weight,
    age,
    selectedMeal,
    selectedDietGoal,
  } = route.params;

  console.log(gender,
    selectedActivity,
    height,
    weight,
    age,
    selectedMeal,
    selectedDietGoal,)

  return (
    <View>
      <Text>DietGeneration</Text>
    </View>
  );
};

export default DietGeneration;

const styles = StyleSheet.create({});
