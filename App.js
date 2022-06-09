import React from 'react';
import CameraScreen from './screens/CameraScreen';
import Translate from './screens/Translate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Capture what you wish to translate"
          component={CameraScreen}
        />
        <Stack.Screen name="Translate" component={Translate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
