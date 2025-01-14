import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Header from '../Header';
import {colors} from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts} from '../../utils/fonts';

const DietGeneration = () => {
  const route = useRoute();
  const [inputQuery, setInputQuery] = useState('');
  const [chats, setChats] = useState([
    {
      text: 'Hi',
      type: 'ai',
    },
    {text: 'hello', type: 'user'},
  ]);

  // const {
  //   gender,
  //   selectedActivity,
  //   height,
  //   weight,
  //   age,
  //   selectedMeal,
  //   selectedDietGoal,
  // } = route.params;

  // console.log(gender,
  //   selectedActivity,
  //   height,
  //   weight,
  //   age,
  //   selectedMeal,
  //   selectedDietGoal,)

  const handleSubmitQuery = () => {
    if (inputQuery === '') {
      return;
    }
    setChats([...chats, {text: inputQuery, type: 'user'}]);
    setInputQuery('');
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>
      <Header title="Ai Plan" />
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {chats.map((chat, index) => (
            <Text
              key={index}
              style={[
                styles.aiTextStyles,
                chat.type === 'ai' ? styles.aiText : styles.userText,
              ]}>
              {chat.type === 'ai' && (
                <MaterialCommunityIcons name="robot" size={24} />
              )}
              {'  '}
              {chat.text}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.textContainer}>
          <TextInput
            value={inputQuery}
            onChangeText={text => setInputQuery(text)}
            style={styles.queryInput}
            placeholder="Enter Query"
          />
          <TouchableOpacity style={styles.sendBtn} onPress={handleSubmitQuery}>
            <Ionicons name="paper-plane" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {},
  sendBtn: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: colors.fontColor1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  queryInput: {
    width: '85%',
    height: '100%',
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.fontColor1,
  },
  aiTextStyles: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
    width: 'auto',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 5,
    justifyContent: 'center',
  },
  aiText: {
    backgroundColor: colors.aiChatBackground,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  userText: {
    backgroundColor: colors.userChatBackground,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
});

export default DietGeneration;
