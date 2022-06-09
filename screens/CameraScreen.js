import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import FlipButton from '../components/FlipButton';
import CaptureButton from '../components/CaptureButton';

export default function CameraScreen() {
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
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} autoFocus="on" ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <FlipButton setType={setType}></FlipButton>
          <CaptureButton cameraRef={cameraRef}></CaptureButton>
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
});
