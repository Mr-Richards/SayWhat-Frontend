import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    backgroundColor: '#F9FBFC',
    marginVertical: 5,
    justifyContent: 'center',
  },

  input: {
    justifyContent: 'center',
    paddingLeft: 7,
  },
});
