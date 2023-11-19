// CheckboxGroup.js

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

const CheckboxGroup = ({options, selectedOptions, handleCheckboxChange}) => {


    return (
        <View>
            {options.map((option, index) => (
                <View key={index}>
                    <CheckBox
                        isChecked={selectedOptions.includes(option)}
                        onClick={() => handleCheckboxChange(option)}
                    />

                    <Text>{option}</Text>
                </View>
            ))}
        </View>
    );
};

export default CheckboxGroup;
