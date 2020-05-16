import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./LoadingScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

import HomeScreen from "./HomeScreen";
import SortingScreen from "./SortingScreen";
import FibbonaciScreen from "./FibbonaciScreen";
import MandelbrotScreen from "./MandelbrotScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBdeyMtejHbqMfJAAuKTa8vWksdRxWpeyg",
  authDomain: "cs389project.firebaseapp.com",
  databaseURL: "https://cs389project.firebaseio.com",
  projectId: "cs389project",
  storageBucket: "cs389project.appspot.com",
  messagingSenderId: "743677703281",
  appId: "1:743677703281:web:a5133832a788f0db6197d0",
  measurementId: "G-JKLSNWVHZ5"
};

firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
      Home: {
          screen: HomeScreen,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
          }
      },
      Sort: {
          screen: SortingScreen,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Ionicons name="ios-funnel" size={24} color={tintColor} />
          }
      },
      Fibbonaci: {
          screen: FibbonaciScreen,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Ionicons name="ios-beaker" size={24} color={tintColor} />
          }
      },
      Mandelbrot: {
          screen: MandelbrotScreen,
          navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calculator" size={24} color={tintColor} />
          }
      }
  },
  {
      tabBarOptions: {
          activeTintColor: "#161F3D",
          inactiveTintColor: "#B8BBC4",
          showLabel: false
      }
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});


export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppTabNavigator,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);
