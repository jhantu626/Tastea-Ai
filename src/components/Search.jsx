import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} color={colors.fontColor1} />
      <TextInput 
      value={searchText}
      onChangeText={(text)=>setSearchText(text)}
      placeholder="Search any recipies?" style={styles.inputText} />
      <Ionicons name="options" size={24} color={colors.fontColor1} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.headerTextColor,
  },
  searchContainer: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
});

export default Search;
