// CheckboxGroup.js

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

const CheckboxGroup = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = ['GDP (USD)', 'FDI Inflows (USD)', 'FDI Outflows (USD)', 'Import/Export Flow'];

    const handleCheckboxChange = (option) => {
        setSelectedOptions(prevSelectedOptions =>
            prevSelectedOptions.includes(option)
                ? prevSelectedOptions.filter(currentOption => currentOption !== option)
                : [...prevSelectedOptions, option]
        );
    };

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
