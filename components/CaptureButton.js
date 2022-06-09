import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CaptureButton() {
  let cameraRef = useRef();
  const [photo, setPhoto] = useState();

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      skipProcessing: false,
      exif: false,
    };
    if (!cameraRef.current) {
      <Text>No access to camera</Text>;
    }
    try {
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      console.log(newPhoto, 'you just took a photo');
      setPhoto(newPhoto);
    } catch (error) {
      <Text>Error 🫠</Text>;
    }
  };

  return (
    <TouchableOpacity
      title="Translate!"
      onPress={takePic}
      styles={styles.captureButtonStyle}
    >
      <Text style={styles.text}>Translate!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  captureButtonStyle: {},
  text: {
    fontSize: 18,
    color: 'white',
  },
});
