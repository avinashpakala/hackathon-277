import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Annotation from '../src/Annotation'; // Adjust the import path

const AnnotationList = () => {
  const [annotations, setAnnotations] = useState([]);

  const handleAnnotationSave = (newAnnotation) => {
    setAnnotations([...annotations, newAnnotation]);
  };

  return (
    <View>
      <Annotation onAnnotationSave={handleAnnotationSave} />
      {annotations.map((annotation, index) => (
        <Text key={index}>{annotation}</Text>
      ))}
    </View>
  );
};

export default AnnotationList;
