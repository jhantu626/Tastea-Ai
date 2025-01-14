import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {Header} from '../components';
import StepIndicator from 'react-native-step-indicator';
import {colors} from '../utils/colors';
import Diet1 from '../components/DietPlan/Diet1';
import Diet2 from '../components/DietPlan/Diet2';
import Diet3 from '../components/DietPlan/Diet3';
import DietResult from '../components/DietPlan/DietResult';

const {width} = Dimensions.get('window');

const primaryColor = '#4CAF50'; // A nice, vibrant green
const secondaryColor = '#f0f0f0'; // Light grey background
const textColor = '#333333'; // Dark grey for text
const accentColor = '#FFFFFF'; // White for contrast

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: primaryColor, // Primary color for current step
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: primaryColor, // Primary color for finished steps
  stepStrokeUnFinishedColor: '#ddd', // Lighter grey for unfinished steps
  separatorFinishedColor: primaryColor, // Primary color for finished separators
  separatorUnFinishedColor: '#ddd',
  stepIndicatorFinishedColor: primaryColor, // Primary color for finished indicators
  stepIndicatorUnFinishedColor: '#ddd', // Lighter grey for unfinished indicators
  stepIndicatorCurrentColor: primaryColor, // Primary color for current indicator
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: accentColor, // White text for current indicator
  stepIndicatorLabelFinishedColor: accentColor, // White text for finished indicators
  stepIndicatorLabelUnFinishedColor: textColor,
  labelColor: textColor,
  labelSize: 13,
  currentStepLabelColor: primaryColor,
};

const DietPlanCreator = () => {
  const [step, setStep] = useState(0);
  const labels = ['Physical Info', 'Mean Preferences', 'Goal', 'Confirmation'];

  // Diet Plan Datas
  const [gender, setGender] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [height, setHeight] = useState({feet: '', inces: ''});
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const [selectedDietGoal, setSelectedDietGoal] = useState([]);
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <Diet1
            setStep={setStep}
            gender={gender}
            setGender={setGender}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
            age={age}
            setAge={setAge}
          />
        );
      case 1:
        return (
          <Diet2
            setStep={setStep}
            selectedMeal={selectedMeal}
            setSelectedMeal={setSelectedMeal}
          />
        );
      case 2:
        return (
          <Diet3
            setStep={setStep}
            selectedDietGoal={selectedDietGoal}
            setSelectedDietGoal={setSelectedDietGoal}
          />
        );
      case 3:
        return (
          <DietResult
            age={age}
            gender={gender}
            height={height}
            selectedActivity={selectedActivity}
            selectedMeal={selectedMeal}
            weight={weight}
            selectedDietGoal={selectedDietGoal}
            setStep={setStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Header title="Diet Plan Creator" />
      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          currentPosition={step}
          labels={labels}
          stepCount={labels.length}
          customStyles={customStyles}
          direction="horizontal"
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {renderStepContent()}
      </ScrollView>
    </View>
  );
};

export default DietPlanCreator;

const styles = StyleSheet.create({
  scrollContent: {
    backgroundColor: colors.defaultBgColor,
  },
});
