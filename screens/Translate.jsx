import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useFonts } from 'expo-font';

import { imageToText } from '../utils/imageToText';
import { textTranslater } from '../utils/textTranslater';
import PickerComponent from '../components/LanguagePicker';
import EditCapturedText from '../components/EditCapturedText';
// import dummyTextTranslation from '../utils/dummyTextTranslation';
// import handlePress from '../components/SumbitButton';

export function Translate({ photo }) {
  const [textFromPhoto, setTextFromPhoto] = useState();
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('es');
  const [textToTranslate, setTextToTranslate] = useState();
  // const [dummy, setDummy] = useState();

  // useEffect(() => {
  //   setTextToTranslate([{ Text: JSON.parse(textToTranslate) }]);
  //   textTranslater(textToTranslate, language).then((result) => {
  //     const json = JSON.parse(result);
  //     setTranslatedText(json[0].translations[0].text);
  //   });
  // }, [textToTranslate]);

  // useEffect(() => {
  //   imageToText(photo).then((result) => {
  //     const json = JSON.parse(result);
  //     setTextFromPhoto(json.ParsedResults[0].ParsedText);
  //     return [{ Text: json.ParsedResults[0].ParsedText }];
  //   });
  // }, []);

  //create antother use effect with text i wish to translate as the dependancy
  useEffect(() => {
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
  }, []);

  const handlePress = () => {
    const text = [{ Text: textToTranslate }];
    textTranslater(text, language)
      .then((result) => {
        console.log(result, 'translated result ');
        const json = JSON.parse(result);
        setTranslatedText(json[0].translations[0].text);
      })
      .catch((error) => {
        console.log(error, 'text translation error');
      });
  };

  let [fontsLoaded, error] = useFonts({
    'SF-Pro-Display-Light': require('../assets/fonts/SF-Pro-Display-Light.otf'),
    'SF-Pro-Display-Medium': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Regular': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
  });

  return (
    <SafeAreaView style={styles.safeViewContainer}>
      {!translatedText.length ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <ScrollView style={styles.scrollViewContainer}>
            <View>
              <Text style={styles.text}>Text from photo: {textFromPhoto} </Text>
              <Text style={styles.text}>Translation: {translatedText} </Text>
              <Text style={styles.editHeading}>Edit:</Text>
              <EditCapturedText
                textFromPhoto={textFromPhoto}
                textToTranslate={textToTranslate}
                setTextToTranslate={setTextToTranslate}
              />
              <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Translate</Text>
              </TouchableOpacity>
              <PickerComponent
                style={styles.picker}
                setLanguage={setLanguage}
                language={language}
              />
            </View>
          </ScrollView>
          {/* <View style={styles.pickerContainer}>
          </View> */}
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  scrollViewContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'red',
  },
  pickerContainer: {
    flex: 0.3,
    // alignSelf: 'flex-start',
  },
  picker: {
    flex: 1,
    height: '30%',
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    height: 35,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 24,
    // fontFamily: 'SF-Pro-Display-Regular',
  },
  editHeading: {
    marginLeft: 10,
  },
  text: {
    fontSize: 28,
    marginLeft: 10,
    marginRight: 10,
    // fontFamily: 'SF-Pro-Display-Light',
  },
});
