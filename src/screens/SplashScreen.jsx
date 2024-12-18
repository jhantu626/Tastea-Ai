import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from '../utils/fonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { StackActions, TabActions, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  const navigation=useNavigation();
  useEffect(() => {
    setTimeout(()=>{
      navigation.dispatch(
        StackActions.replace("Onboarding")
      )
    },3000)
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, {marginTop: -5}]}
        source={require('./../../assets//images/images/splash2.png')}
      />
      <LinearGradient colors={['#F0F3ED','#FCFCF9']} style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require('./../../assets/images/logoIcons/logo.png')}
        />
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{fontSize: 40, fontFamily: fonts.bold, color: '#dd4941'}}>
            Cook <Text style={{fontFamily: fonts.light}}>smart</Text>
          </Text>
        </View>
        <Text style={{fontSize: 22,fontFamily: fonts.semiBold,color: '#dd4941'}}>Cook Smart, Eat Well</Text>
        </View>
      </LinearGradient>
      <Image
        style={[styles.image]}
        source={require('./../../assets//images/images/splash1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fcfcf9',
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
    resizeMode: 'cover',
  },
  contentContainer: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    // backgroundColor: '#fcfcf9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(15),
    height: responsiveHeight(8),
    resizeMode: 'cover',
    borderRadius: 5
  },
});

export default SplashScreen;
