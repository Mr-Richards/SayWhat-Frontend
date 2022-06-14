import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const EditCapturedText = ({
  textFromPhoto,
  setTextToTranslate,
  textToTranslate,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        multiline={true}
        onChangeText={setTextToTranslate}
        defaultValue={textFromPhoto}
        value={textToTranslate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
  },
});

export default EditCapturedText;
