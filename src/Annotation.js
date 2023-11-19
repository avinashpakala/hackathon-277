import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Annotation = ({ onAnnotationSave }) => {
  const [annotationText, setAnnotationText] = useState('');

  const handleSave = () => {
    if (annotationText.trim()) {
      onAnnotationSave(annotationText);
      setAnnotationText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setAnnotationText}
        value={annotationText}
        placeholder="Write your annotation here"
        multiline
      />
      <Button title="Save Annotation" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
});

export default Annotation;
