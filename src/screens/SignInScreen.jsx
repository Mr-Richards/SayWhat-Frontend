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
import Logo from '../../assets/images/translate-app-180.png';
import { CustomInput } from '../components/CustomInuput';
import { CustomButton } from '../components/CustomButton';

export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('SignIn ');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  const onSignInApple = () => {
    console.warn('SignIn a ');
  };

  const onSignInGoogle = () => {
    console.warn('SignIn g ');
  };

  const onSignInFacebook = () => {
    console.warn('SignIn f ');
  };
  const onSignUpPressed = () => {
    console.warn('Sign Up  ');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        ></Image>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          type={'PRIMARY'}
        />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          type={'PRIMARY'}
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an accout? Create one."
          onPress={onSignUpPressed}
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
    // margin: 40,
    backgroundColor: 'white',
  },
  logo: {
    width: '70%',
    maxWidth: 150,
    maxHeight: 150,
  },
});

export default SignInScreen;
