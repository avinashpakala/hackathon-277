// PersonaPicker.js

import React from 'react';
import { View, Button, ActionSheetIOS, Text } from 'react-native';

const PersonaPicker = ({ onSelectPersona }) => {
  const countries = ['ECON Researcher', 'Govt Representative'];

  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...countries],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          onSelectPersona(countries[buttonIndex - 1]);
        }
      }
    );
  };

  return (
    <View>
      <Button title="Select Persona" onPress={showActionSheet} />
    </View>
  );
};

export default PersonaPicker;
