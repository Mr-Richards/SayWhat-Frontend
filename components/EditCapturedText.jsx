import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const EditCapturedText = ({ textFromPhoto }) => {
  const [text, onChangeText] = useState(textFromPhoto);
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default EditCapturedText;
