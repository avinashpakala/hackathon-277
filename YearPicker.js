// YearPicker.js

import React from 'react';
import { View, Button, ActionSheetIOS, Text } from 'react-native';

const YearPicker = ({ onSelectYear }) => {
  const countries = ['ECON Researcher', 'Govt Representative'];

  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...countries],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          onSelectYear(countries[buttonIndex - 1]);
        }
      }
    );
  };

  return (
    <View>
      <Button title="Select Year" onPress={showActionSheet} />
    </View>
  );
};

export default YearPicker;
