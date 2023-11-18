import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Webview = () => {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <WebView 
        source={{ uri: 'https://hackathon-280.vercel.app/' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  webview: {
    flex: 1
  }
});

export default Webview;
