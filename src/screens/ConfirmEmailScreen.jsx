// login
// sign up
// continue as guest

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { CustomInput } from '../components/CustomInuput';
import { CustomButton } from '../components/CustomButton';
import { SocialSignInButtons } from '../components/SocialSignInButtons';

export const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    console.warn('Register');
  };
  const onSignInPressed = () => {
    console.warn('sign in ');
  };
  const onResendPressed = () => {
    console.warn('resend');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 80,
    paddingLeft: 55,
    paddingRight: 55,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
