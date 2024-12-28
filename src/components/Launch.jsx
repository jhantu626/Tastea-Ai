import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ComponentHeader from './SubComponents/ComponentHeader';
import { fonts } from '../utils/fonts';

const Launch = () => {
  return (
    <View>
      <ComponentHeader title={'Launch'} />
      <View style={styles.launchImageContainer}>
        <View style={styles.firstImageContainer}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
              objectFit: 'cover',
            }}
            source={require('./../../assets/images/images/launch1.jpg')}
          />
        </View>
        <View style={styles.secondImageContainer}>
          <Image
            style={styles.secondImage}
            source={require('./../../assets/images/images/launch2.jpg')}
          />
          <TouchableOpacity style={{height: '48%'}}>
            <View
              style={{
                backgroundColor: '#000',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 10,
                zIndex: 20,
                opacity: 0.5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              </View>
              <View style={{
                position: 'absolute',
                zIndex: 30,
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.8
              }}>
                <Text style={{color: '#fff',fontSize: 18,fontFamily: fonts.semiBold}}>10+</Text>
                <Text style={{color: '#fff',fontSize: 18,fontFamily: fonts.semiBold}}>Recipes</Text>
              </View>
            <Image
              style={[styles.secondImage, {height: '100%'}]}
              source={require('./../../assets/images/images/launch3.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  secondImage: {
    width: '100%',
    height: '48%',
    borderRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 10,
  },
  secondImageContainer: {
    width: '40%',
    height: 160,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  firstImageContainer: {
    width: '60%',
    height: 160,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 10,
  },
  launchImageContainer: {
    width: '100%',
    // height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginVertical: 10,
  },
});


export default Launch