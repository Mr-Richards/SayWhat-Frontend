import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen } from './src/screens/SignInScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { ConfirmEmailScreen } from './src/screens/ConfirmEmailScreen';
import { ForgotPasswordScreen } from './src/screens/ForgotPasswordScreen';
import { NewPasswordScreen } from './src/screens/NewPasswordScreen';
import CameraScreen from './src/screens/CameraScreen';
import { Translate } from './src/screens/Translate';

const Stack = createStackNavigator();

function App() {
  const [photo, setPhoto] = useState();

  return (
    <NavigationContainer>
      {/* <NavigationContainer style={styles.root}> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn">{() => <SignInScreen />}</Stack.Screen>
        <Stack.Screen name="SignUp">{() => <SignUpScreen />}</Stack.Screen>
        <Stack.Screen name="ConfirmEmail">
          {() => <ConfirmEmailScreen />}
        </Stack.Screen>
        <Stack.Screen name="ForgotPassword">
          {() => <ForgotPasswordScreen />}
        </Stack.Screen>
        <Stack.Screen name="NewPassword">
          {() => <NewPasswordScreen />}
        </Stack.Screen>
        <Stack.Screen name="Capture what you wish to translate">
          {() => <CameraScreen setPhoto={setPhoto} />}
        </Stack.Screen>
        <Stack.Screen screenOptions={{ headerShown: true }} name="Translation">
          {() => <Translate photo={photo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });

export default App;
