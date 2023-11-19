// YearPicker.js

import React from 'react';
import { View, Button, ActionSheetIOS, Text } from 'react-native';
import { generateYearArray } from './src/utils/common';

const YearPicker = ({ onSelectYear }) => {
  const countries = generateYearArray(2000, 2020);

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
