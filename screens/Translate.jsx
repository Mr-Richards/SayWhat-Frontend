import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { imageToText } from '../utils/imageToText';
import { textTranslater } from '../utils/textTranslater';
import PickerComponent from '../components/LanguagePicker';
import EditCapturedText from '../components/EditCapturedText';

export function Translate({ photo }) {
  const [textFromPhoto, setTextFromPhoto] = useState();
  const [translatedText, setTranslatedText] = useState();
  const [language, setLanguage] = useState('en');

  useEffect(() => {}, [textFromPhoto]);

  imageToText(photo)
    .then((result) => {
      console.log(result, 'imageToText result');
      const json = JSON.parse(result);
      console.log(json.ParsedResults[0].ParsedText, 'json');
      setTextFromPhoto(json.ParsedResults[0].ParsedText);
      return [{ Text: json.ParsedResults[0].ParsedText }];
    })
    .then((result) => {
      textTranslater(result, language)
        .then((result) => {
          console.log(result, 'translated result ');
          const json = JSON.parse(result);
          setTranslatedText(json[0].translations[0].text);
        })
        .catch((error) => {
          console.log(error, 'text translation error');
        });
    })
    .catch((error) => {
      console.log(error, 'image to text error');
    });

  return (
    <View styels={styles.container}>
      <ScrollView>
        <Text>Translation screen</Text>
        <Text>The text in the image says: {textFromPhoto} </Text>
        {/* <EditCapturedText textFromPhoto={textFromPhoto} /> */}
        <Text>In spanish this says: {translatedText} </Text>
        <PickerComponent setLanguage={setLanguage} language={language} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
