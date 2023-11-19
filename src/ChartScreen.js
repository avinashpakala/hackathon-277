import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiLineChart from '../src/MultiLineChart'; // Adjust path as needed

const ChartScreen = ({ route }) => {
  // You can pass data to this screen via the route.params
  const { data } = route.params;

  return (
    <View style={styles.container}>
      {/* Use the passed data or any other content you want to display */}
      <MultiLineChart data={data} />
      {/* Other components or content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Other styles
});

export default ChartScreen;
