import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import { StackActions, TabActions, useNavigation } from '@react-navigation/native';

const Header = ({isHome = false,title=""}) => {
  const navigation=useNavigation();



  const handleBack=()=>{
    if(navigation.canGoBack()){
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      {isHome ? (
        <Image
          source={require('./../../assets/images/logoIcons/default-user.png')}
          style={{width: 35, height: 35}}
        />
      ) : (
        <TouchableOpacity
        onPress={handleBack}
          style={{
            width: 35,
            height: 35,
            backgroundColor: '#fff',
            borderRadius: 17,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Ionicons
            name="chevron-back"
            size={24}
          />
        </TouchableOpacity>
      )}

      {isHome?(<View style={styles.textContainer}>
        <Ionicons name="location-sharp" size={16} color={colors.fontColor1} />
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.medium,
            color: colors.fontColor1,
          }}>
          Kolkata, India
        </Text>
      </View>):(
        <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: fonts.medium,
            color: colors.fontColor1,
          }}>
          {title}
        </Text>
      </View>
      )}
      <TouchableOpacity style={styles.bellContainer}>
        <Octicons name="bell-fill" size={20} />
        <View style={styles.activeNotification}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  activeNotification: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.theme,
    right: 15,
    top: 10,
  },
  bellContainer: {
    width: 47,
    height: 47,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Header;
