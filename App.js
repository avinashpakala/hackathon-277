import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebView from './src/WebViewPage'; // Ensure this path is correct
import GDPChart from './src/MultiLineChart'; // Ensure this path is correct
import MultiLineChart from './src/MultiLineChart';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState('India');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
      >
        <Picker.Item label="India" value="India" />
        <Picker.Item label="US" value="US" />
        <Picker.Item label="China" value="China" />
      </Picker>
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
