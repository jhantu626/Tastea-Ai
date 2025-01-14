import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Header} from '../components';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
import {
  responsiveWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const DietPlan = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#f7fff7', '#d4efdf']} style={styles.container}>
      <Header title="Diet Plan" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Get Your Customized Diet Plan</Text>
        <Text style={styles.subText}>
          Achieve your health goals with a personalized diet plan tailored just
          for you. Let us help you maintain a balanced lifestyle!
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DietPlanCreator');
          }}
          style={styles.dietPlanBtn}>
          <Text style={styles.btnTxt}>Create a Diet Plan</Text>
        </TouchableOpacity>

        <View style={styles.tipsContainer}>
          <Text style={styles.sectionHeader}>Tips for a Healthy Diet:</Text>
          <Text style={styles.tip}>
            🌱 Include fresh vegetables and fruits in your meals.
          </Text>
          <Text style={styles.tip}>
            💧 Stay hydrated by drinking at least 2 liters of water daily.
          </Text>
          <Text style={styles.tip}>
            🥗 Opt for whole grains and lean proteins over processed foods.
          </Text>
          <Text style={styles.tip}>
            🕒 Maintain consistent meal timings to support digestion.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LearnMore');
          }}
          style={styles.learnMoreBtn}>
          <Text style={styles.learnMoreTxt}>Learn More About Nutrition</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 28,
    fontFamily: fonts.bold,
    color: colors.headerTextColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.fontColor2,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  dietPlanBtn: {
    width: responsiveWidth(80),
    height: responsiveScreenHeight(8),
    backgroundColor: '#DAF7A6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 20,
  },
  btnTxt: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: colors.fontColor1,
  },
  tipsContainer: {
    width: responsiveWidth(90),
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.headerTextColor,
    marginBottom: 10,
  },
  tip: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.fontColor2,
    marginBottom: 5,
  },
  learnMoreBtn: {
    width: responsiveWidth(80),
    height: responsiveScreenHeight(6),
    backgroundColor: '#85C1E9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  learnMoreTxt: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: '#fff',
  },
});

export default DietPlan;
