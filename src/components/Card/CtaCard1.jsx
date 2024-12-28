import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const CtaCard1 = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
            paddingLeft: 10
}}>
        <Text 
            style={{
                fontSize: 20,
                width: 140,
                fontFamily: fonts.medium,
                color: colors.headerTextColor
            }}
        >Find your food recipe easily</Text>
        <TouchableOpacity style={{
            width: 100,
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8
        }}>
          <MaterialCommunityIcons name="food" color={colors.secondaryTheme} size={24} />
          <Text style={{
            fontSize: 18,
            fontFamily: fonts.regular,
          }}>Find</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{
          alignSelf: 'flex-end',
          right: 10
        }}
        source={require('./../../../assets/images/images/findWomen.png')}
      />
    </View>
  );
};

export default CtaCard1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    marginVertical: 5,
    backgroundColor: colors.secondaryTheme,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
});
