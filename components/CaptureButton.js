import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CaptureButton({ cameraRef }) {
  // let cameraRef = useRef();
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
      console.log('no camera ref');
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
      setCameraRef={cameraRef}
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