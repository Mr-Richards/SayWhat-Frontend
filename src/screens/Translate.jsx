import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Auth } from 'aws-amplify';

import { useFonts } from 'expo-font';

import { imageToText } from '../utils/imageToText';
import { textTranslater } from '../utils/textTranslater';
import PickerComponent from '../components/LanguagePicker';
import EditCapturedText from '../components/EditCapturedText';

export function Translate({ photo, setUser, user }) {
  const [textFromPhoto, setTextFromPhoto] = useState();
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('es');
  const [textToTranslate, setTextToTranslate] = useState();

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

  const signOut = () => {
    Auth.signOut();
    setUser(false);
    // navigation.navigate('CameraScreen');
  };

  return (
    <View style={[{ backgroundColor: 'white' }, { flex: 1 }]}>
      <SafeAreaView style={styles.safeViewContainer}>
        {!translatedText.length ? (
          <ActivityIndicator />
        ) : (
          <>
            <ScrollView style={styles.scrollViewContainer}>
              <View>
                {user === 'guest' ? null : (
                  <Text
                    onPress={signOut}
                    style={{
                      // width: '100%',
                      textAlign: 'right',
                      color: 'red',
                      // marginTop: 'auto',
                      marginVertical: 10,
                      fontSize: 20,
                    }}
                  >
                    Sign Out
                  </Text>
                )}
                <Text style={styles.text}>
                  Text from photo: {textFromPhoto}{' '}
                </Text>
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
          </>
        )}
      </SafeAreaView>
    </View>
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
    // backgroundColor: 'black',
  },
  scrollViewContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  pickerContainer: {
    flex: 0.3,
    zIndex: 1,
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
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 45,
    fontSize: 20,
    fontWeight: '500',

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
    // color: 'white',
  },
});
