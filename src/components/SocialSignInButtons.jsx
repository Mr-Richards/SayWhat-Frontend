import React from 'react';
import { CustomButton } from './CustomButton';

export const SocialSignInButtons = () => {
  const onSignInApple = () => {
    console.warn('SignIn a ');
  };

  const onSignInGoogle = () => {
    console.warn('SignIn g ');
  };

  const onSignInFacebook = () => {
    console.warn('SignIn f ');
  };
  return (
    <>
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
    </>
  );
};
