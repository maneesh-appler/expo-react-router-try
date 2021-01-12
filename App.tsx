import React from 'react';
// import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/homeScreen';
import SecondScreen from './components/secondScreen';

import "intl";
import { Platform } from "react-native";

if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
        (Intl as any).__disableRegExpRestore();
    }
}
import "intl/locale-data/jsonp/en";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer
    linking={{
      prefixes: ["rne://127.0.0.1:19000/--/"],
      config: {
        screens: {
          Root: {
            path: "/", 
            initialRouteName: "/",
            screens: {
              HomeScreen: "/",
              SecondScreen: "/second"
            }
          }
        }
      }
    }}>
    <Stack.Navigator>
      <Stack.Screen name="LandingPage" component={HomeScreen} />
      <Stack.Screen name="RoutedPage" component={SecondScreen} />

    </Stack.Navigator>
  </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
