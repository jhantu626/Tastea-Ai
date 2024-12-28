import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DietPlan from './screens/DietPlan';
import GenerateRecipe from './screens/GenerateRecipe';
import MealPlan from './screens/MealPlan';
import ProfileScreen from './screens/ProfileScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import {colors} from './utils/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AuthProvider, {AuthContext} from './context/AuthContext';
import {AlertNotificationRoot} from 'react-native-alert-notification';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            animation: 'slide_from_left',
          }}
        />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.theme,
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          },
          tabBarButton: props => (
            <Pressable {...props} android_ripple={{color: colors.theme}} />
          ),
          animation: 'shift'
        }}>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="DietPlan"
          component={DietPlan}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <FontAwesome5 name="apple-alt" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="GenerateRecipe"
          component={GenerateRecipe}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <MaterialCommunityIcons
                name="chef-hat"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="MealPlan"
          component={MealPlan}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <MaterialIcons name="restaurant-menu" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({size, focused, color}) => (
              <FontAwesome5 name="user-circle" size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  };

  const AppNav = () => {
    const {userToken} = useContext(AuthContext);
    return (
      <NavigationContainer>
        {userToken ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

  return (
    <AuthProvider>
      <AlertNotificationRoot>
        <AppNav />
      </AlertNotificationRoot>
    </AuthProvider>
  );
};

export default App;
