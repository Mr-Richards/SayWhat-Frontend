import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CameraScreen from './src/screens/CameraScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { Translate } from './src/screens/Translate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  const [photo, setPhoto] = useState();

  return (
    <NavigationContainer>
      {/* <NavigationContainer style={styles.root}> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">{() => <SignInScreen />}</Stack.Screen>
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
