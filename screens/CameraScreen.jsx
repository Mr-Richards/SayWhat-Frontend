import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import FlipButton from '../components/FlipButton';
import CaptureButton from '../components/CaptureButton';

export default function cameraScreen({ setPhoto }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(useRef());

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

  return (
    <Camera style={styles.camera} type={type} autoFocus="on" ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <FlipButton setType={setType}></FlipButton>
        <CaptureButton
          setPhoto={setPhoto}
          cameraRef={cameraRef}
        ></CaptureButton>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 0.25,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    margin: 20,
  },
});
