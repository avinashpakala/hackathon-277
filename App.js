import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebView from './src/WebViewPage'; // Ensure this path is correct
import GDPChart from './src/MultiLineChart'; // Ensure this path is correct
import MultiLineChart from './src/MultiLineChart';
import CheckboxGroup from './CheckboxGroup';
import { generateYearArray } from './src/utils/common';
import PersonaPicker from './PersonaPicker';
import YearPicker from './YearPicker';
import ChartScreen from './src/ChartScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AnnotationList from './src/AnnotationList';
import HomeScreen from './src/HomeScreen';
const Tab = createBottomTabNavigator();
import AgriScreen from './src/AgriScreen';
import DebtScreen from './src/DebtScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Macro" component={HomeScreen} />
        <Tab.Screen name="Agriculture" component={AgriScreen} />
        <Tab.Screen name="Debit" component={DebtScreen} />
        <Tab.Screen name="BudgetGPT" component={WebView} />
      </Tab.Navigator>
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
  scrollView: {
    flex: 1,
  },
  picker: {
    width: 200,
    height: 44,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
