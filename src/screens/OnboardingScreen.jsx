import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { fonts } from '../utils/fonts';
import { StackActions, useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation=useNavigation();
  const pages = [
    {
      backgroundColor: '#52AF8B',
      image: (
        <Image source={require('./../../assets/images/images/onb1.png')} />
      ),
      title: 'Discover New Recipes',
      subtitle: 'Find a variety of recipes to suit your taste and cravings!',
    },
    {
      backgroundColor: '#E17450',
      image: (
        <Image source={require('./../../assets/images/images/onb2.png')} />
      ),
      title: 'Generate Ideas Instantly',
      subtitle: 'Shake things up with random recipe suggestions!',
    },
    {
      backgroundColor: '#C9B29E',
      image: (
        <Image source={require('./../../assets/images/images/onb3.png')} />
      ),
      title: 'Save Your Favorites',
      subtitle: 'Keep track of the recipes you love and revisit them anytime!',
    },
  ];

  return (
    <Onboarding
      pages={pages}
      titleStyles={styles.title} // Custom title style
      subTitleStyles={styles.subtitle} // Custom subtitle style
      containerStyles={styles.container}
      onSkip={()=>{
        navigation.dispatch(StackActions.replace("Login"))
      }}
      onDone={()=>{
        navigation.dispatch(StackActions.replace("Login"))
      }}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24, // Custom font size
    color: '#FFFFFF', // Custom text color
    textAlign: 'center',
    fontFamily: fonts.bold
  },
  subtitle: {
    fontSize: 16, // Custom font size for subtitle
    color: '#EEEEEE',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: fonts.light // Add padding for better width control
  },
  container: {
    paddingHorizontal: 40, // Adjust overall width
  },
});