import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CameraType } from 'expo-camera';

export default function FlipButton({ setType }) {
  return (
    <TouchableOpacity
      style={styles.flipButtonStyle}
      onPress={() => {
        setType((prev) =>
          prev === CameraType.back ? CameraType.front : CameraType.back,
        );
        console.log('Flipped');
      }}
    >
      <Text style={styles.text}> Flip </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flipButtonStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
