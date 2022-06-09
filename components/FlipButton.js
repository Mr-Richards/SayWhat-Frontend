import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FlipButton() {
  return (
    <TouchableOpacity
      style={styles.flipButtonStyle}
      onPress={() => {
        setType(type === CameraType.back ? CameraType.front : CameraType.back);
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
