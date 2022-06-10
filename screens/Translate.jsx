import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { imageToText } from '../utils/imageToText';

export function Translate({ photo }) {
  const [textFromPhoto, setTextFromPhoto] = useState();
  console.log('Translate', photo);
  imageToText(photo)
    .then((result) => {
      console.log(result, 'result2');
      const json = JSON.parse(result);
      console.log(json.ParsedResults[0].ParsedText, 'json');
      setTextFromPhoto(json.ParsedResults[0].ParsedText);
    })
    .catch((error) => {
      console.log(error, 'translate error');
    });
  return (
    <View>
      <Text>Translate screen</Text>
      <Text>The text in the image says: {textFromPhoto} </Text>
    </View>
  );
}
