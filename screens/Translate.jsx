import React from 'react';
import { View, Text } from 'react-native';

export function Translate({ photo }) {
  return (
    <View>
      <Text>Translate screen</Text>
      <Text>{photo ? photo.base64 : 'no picture'}</Text>
    </View>
  );
}
