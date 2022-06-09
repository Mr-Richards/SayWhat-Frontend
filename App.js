import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>Please allow access to camera in settings</Text>;
  }

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
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={type}
          autoFocus="on"
          ref={cameraRef}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back,
                );
                console.log('Flipped');
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Translate!"
              onPress={takePic}
              styles={styles.captureButton}
            >
              <Text style={styles.text}>Translate!</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 20,
  },
  flipButton: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  captureButton: {},
  text: {
    fontSize: 18,
    color: 'white',
  },
});
