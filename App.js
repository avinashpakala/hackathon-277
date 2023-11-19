import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebView from './src/WebViewPage'; // Ensure this path is correct
import GDPChart from './src/MultiLineChart'; // Ensure this path is correct
import MultiLineChart from './src/MultiLineChart';
import CheckboxGroup from './CheckboxGroup';
import { generateYearArray } from './src/utils/common';

const Tab = createBottomTabNavigator();
import CountryPicker from './CountryPicker';

function HomeScreen({ navigation }) {
  const [country, setCountry] = useState(''); // Country state
  const [showChart, setShowChart] = useState(false); // To toggle chart view
  const [showEditor, setShowEditor] = useState(false); // To toggle annotation editor
  const [data, setData] = useState([]); // Chart data state
  const [selectedYear, setSelectedYear] = useState('2020');

  // Generate years from 2016 to 2020
  const years = generateYearArray(2016, 2020);

  // Mock API response
  const apiResponse = [
    [2012, 6], [2013, 7], [2014, 7], [2015, 8],
    [2016, 6], [2017, 6], [2018, 4], [2019, -7], [2020, null]
  ];

  const handleShowPress = () => {
    setData(apiResponse); // Set data for chart
    setShowChart(true); // Show chart screen
  };
  return (
    <View style={styles.container}>
      <CountryPicker onSelectCountry={setCountry} />
      {country? (<Text style={{ color: 'black', textAlign: 'center' }}>{country}</Text>): (<Text/>)}
      <CheckboxGroup />
      <TouchableOpacity
        onPress={handleShowPress}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: 'blue',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Show</Text>
      </TouchableOpacity>

      {/* <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
      >
        <Picker.Item label="India" value="India" />
        <Picker.Item label="US" value="US" />
        <Picker.Item label="China" value="China" />
      </Picker> */}
      <MultiLineChart country={setCountry} />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Macro" component={HomeScreen} />
        <Tab.Screen name="Agriculture" component={HomeScreen} />
        <Tab.Screen name="Debit" component={HomeScreen} />
        <Tab.Screen name="BudgetGPT" component={WebView} />
        {/* The second WebView tab seems to be a duplicate. Consider renaming or removing it. */}
        {/* Add more tabs as needed */}
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
  picker: {
    width: 200,
    height: 44,
  }
});
