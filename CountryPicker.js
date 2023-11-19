// CountryPicker.js

import React from 'react';
import { View, Button, ActionSheetIOS, Text } from 'react-native';

const CountryPicker = ({ onSelectCountry }) => {
  const countries = ['India', 'USA', 'China'];

  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...countries],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          onSelectCountry(countries[buttonIndex - 1]);
        }
      }
    );
  };

  return (
    <View>
      <Button title="Select Country" onPress={showActionSheet} />
    </View>
  );
};

export default CountryPicker;
