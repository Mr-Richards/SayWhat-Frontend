import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function captureButton({ cameraRef, setPhoto }) {
  const navigation = useNavigation();

  let takePic = async () => {
    let options = {
      quality: 0.4,
      base64: true,
      skipProcessing: false,
      exif: false,
    };
    if (!cameraRef.current) {
      <Text>No access to camera</Text>;
      console.log('no camera ref');
    }
    try {
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      console.log(newPhoto, 'you just took a photo');
      setPhoto(newPhoto);
      navigation.navigate('Translation');
    } catch (error) {
      console.log('newPhoto error', error);
    }
  };

  return (
    <TouchableOpacity
      styles={styles.captureButtonStyle}
      title="Translate!"
      setCameraRef={cameraRef}
      onPress={() => {
        takePic();
      }}
    >
      <Text style={styles.text}>Translate!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  captureButtonStyle: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
});
