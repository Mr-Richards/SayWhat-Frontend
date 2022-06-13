import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import { useFonts } from 'expo-font';

const EditCapturedText = ({
  textFromPhoto,
  setTextToTranslate,
  textToTranslate,
}) => {
  let [fontsLoaded, error] = useFonts({
    'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.otf'),
  });

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
    height: 35,
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
