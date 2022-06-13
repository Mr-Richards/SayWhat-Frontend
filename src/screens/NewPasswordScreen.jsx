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

export const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {
    console.warn('submit');
  };
  const onSignInPressed = () => {
    console.warn('sign in ');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
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
