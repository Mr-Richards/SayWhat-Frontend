import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

// import { useFonts } from 'expo-font';

export const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
    marginVertical: 8,
  },
  container_PRIMARY: {
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  container_SECONDARY: {
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 10,
  },
  container_TERTIARY: {},
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  text_SECONDARY: {
    color: 'black',
  },
  text_TERTIARY: {
    color: 'grey',
  },
});
