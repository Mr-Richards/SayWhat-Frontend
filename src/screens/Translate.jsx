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

import { imageToText } from '../utils/imageToText';
import { textTranslater } from '../utils/textTranslater';
import PickerComponent from '../components/LanguagePicker';
import EditCapturedText from '../components/EditCapturedText';
import { useNavigation } from '@react-navigation/native';
import { postTranslation } from '../services/translationServices';

export function Translate({ photo, setUser, user, userId }) {
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

  const handlePress = async () => {
    const text = [{ Text: textToTranslate }];
    textTranslater(text, language)
      .then((result) => {
        console.log(textToTranslate, 'ttetetetettextextetd');
        console.log(result, 'translated result ');
        const json = JSON.parse(result);
        setTranslatedText(json[0].translations[0].text);
        const response = postTranslation({
          original: textToTranslate,
          translated: json[0].translations[0].text,
          userid: userId,
        });
        console.log(response, 'post translation response');
      })
      .catch((error) => {
        console.log(error, 'text translation error');
      });
  };

  const signOut = () => {
    Auth.signOut();
    setUser(false);
  };

  const navigation = useNavigation();

  const prevTrans = () => {
    navigation.navigate('PreviousTranslations', userId);
  };

  return (
    <View style={[{ backgroundColor: 'white' }, { flex: 1 }]}>
      <SafeAreaView style={styles.safeViewContainer}>
        {!translatedText.length ? (
          <ActivityIndicator style={{ flex: 1 }} />
        ) : (
          <>
            <ScrollView style={styles.scrollViewContainer}>
              <View>
                <View style={styles.userPrivalages}>
                  {user === 'guest' ? null : (
                    <Text
                      onPress={prevTrans}
                      style={{
                        color: 'red',
                        marginVertical: 10,
                        fontSize: 20,
                      }}
                    >
                      Translations
                    </Text>
                  )}
                  {user === 'guest' ? null : (
                    <Text
                      onPress={signOut}
                      style={{
                        color: 'red',
                        marginVertical: 10,
                        fontSize: 20,
                      }}
                    >
                      Sign Out
                    </Text>
                  )}
                </View>
                <Text style={styles.textHeadings}>Text from photo:</Text>
                <Text style={styles.textFromAPIs}>{textFromPhoto}</Text>
                <Text style={styles.textHeadings}>Translation:</Text>
                <Text style={styles.textFromAPIs}>{translatedText}</Text>
                <Text style={styles.editHeading}>Edit:</Text>
                <EditCapturedText
                  textFromPhoto={textFromPhoto}
                  textToTranslate={textToTranslate}
                  setTextToTranslate={setTextToTranslate}
                />
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                  <Text style={styles.buttonText}>Translate</Text>
                </TouchableOpacity>
                <View style={styles.pickerContainer}>
                  <PickerComponent
                    style={styles.picker}
                    setLanguage={setLanguage}
                    language={language}
                  />
                </View>
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
    // backgroundColor: 'black',
  },
  scrollViewContainer: {
    flex: 1,
  },
  userPrivalages: {
    paddingHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  picker: {},
  button: {
    height: 45,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 45,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  editHeading: {
    marginLeft: 12,
    margin: 5,
  },

  textHeadings: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  textFromAPIs: {
    fontSize: 28,
    marginHorizontal: 10,
  },
});
