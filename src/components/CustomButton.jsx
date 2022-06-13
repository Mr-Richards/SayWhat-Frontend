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

// let [fontsLoaded, error] = useFonts({
//   'SF-Pro-Display-Semibold': require('../../assets/fonts/SF-Pro-Display-Semibold.otf'),
// });

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
    marginVertical: 10,
  },
  container_PRIMARY: {
    backgroundColor: 'black',
  },
  container_SECONDARY: {
    borderColor: 'black',
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  text_SECONDARY: {
    color: 'black',
  },
  text_TERTIARY: {
    color: 'grey',
  },
});
