import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Header from '../Header';
import {colors} from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts} from '../../utils/fonts';

const DietGeneration = () => {
  const route = useRoute();

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

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Header title="Ai Plan" />
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Text style={styles.aiTextStyles}>
            <MaterialCommunityIcons name="robot" size={24} />
            Hey! I’ve been working on this new project for the past few weeks,
            and I’m really excited about how it’s coming together. It’s a mobile
            app designed to simplify travel bookings, especially for frequent
            flyers. The app focuses on creating a seamless experience where
            users can search, compare, and book flights quickly. I’m building it
            with React Native for the frontend and using Spring Boot for the
            backend, so it’s cross-platform and has a solid, scalable API. Right
            now, I’m working on integrating a flight search API to provide
            real-time results, and I’ve already implemented user authentication
            and payment processing with Stripe. The challenge I’m tackling at
            the moment is optimizing the UI for different devices and ensuring
            everything works smoothly, even on slower connections. Once I’m done
            with that, I plan to add a feature for saving user preferences so
            the app can recommend flights based on their history. It’s been a
            lot of work, but I’m learning so much, and I can’t wait to share the
            final product. Do you have any tips for testing or deploying mobile
            apps effectively? I’d love to hear your thoughts if you’ve worked on
            something similar!
          </Text>
        </ScrollView>

        <View style={styles.textContainer}>
          <TextInput placeholder="Enter Query" />
          <TouchableOpacity style={styles.sendBtn}>
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
    fontFamily: fonts.regular,
    fontSize: 14,
    width: '90%',
    textAlign: 'left',
    backgroundColor: colors.aiChatBackground,
    borderRadius: 10
  },
});

export default DietGeneration;
