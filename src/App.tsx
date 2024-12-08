import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DietPlan from './screens/DietPlan';
import GenerateRecipe from './screens/GenerateRecipe';
import MealPlan from './screens/MealPlan';
import ProfileScreen from './screens/ProfileScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const App = () => {

  const [isLogin,setIsLogin]=useState(false)

  const Stack=createNativeStackNavigator();
  const Tabs=createBottomTabNavigator()

  const AuthStack=()=>{
    return (
      <Stack.Navigator initialRouteName='Splash' screenOptions={{
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name='Splash' component={SplashScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    )
  }



  const AppStack=()=>{
    return (
      <Tabs.Navigator screenOptions={{
        // animation: 'shift'
      }}>
        <Tabs.Screen name='Home' component={HomeScreen}/>
        <Tabs.Screen name='DietPlan' component={DietPlan}/>
        <Tabs.Screen name='GenerateRecipe' component={GenerateRecipe}/>
        <Tabs.Screen name='MealPlan' component={MealPlan}/>
        <Tabs.Screen name='Profile' component={ProfileScreen}/>
      </Tabs.Navigator>
    )
  }

  return (
    <NavigationContainer>
        {isLogin?<AppStack/>:<AuthStack/>}
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})