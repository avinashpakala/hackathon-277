import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebView from './src/WebViewPage'; // Ensure this path is correct
import GDPChart from './src/MultiLineChart'; // Ensure this path is correct
import MultiLineChart from './src/MultiLineChart';
import CheckboxGroup from './CheckboxGroup';
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [showChart, setShowChart] = useState(false); // To toggle chart view
  const [showEditor, setShowEditor] = useState(false); // To toggle annotation editor
  const [data, setData] = useState([]); // Chart data state

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
      <MultiLineChart country={selectedCountry} />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Macro" component={HomeScreen} />
        <Tab.Screen name="WebViewPage" component={WebView} />
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
});
