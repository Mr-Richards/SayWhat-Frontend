import React, { useState } from 'react';
import CameraScreen from './screens/CameraScreen';
import { Translate } from './screens/Translate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  const [photo, setPhoto] = useState();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Capture what you wish to translate">
          {() => <CameraScreen setPhoto={setPhoto} />}
        </Stack.Screen>
        <Stack.Screen name="Translation">
          {() => <Translate photo={photo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
