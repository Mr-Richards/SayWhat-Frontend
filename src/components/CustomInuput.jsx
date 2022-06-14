import { View, StyleSheet, TextInput, Text } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

export const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : '#e8e8e8' },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch', width: '100%' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
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
