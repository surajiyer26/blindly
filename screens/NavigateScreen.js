import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';

export default function NavigateScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={{ color: '#fff', textAlign: 'center', marginTop: 50 }}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio="16:9">
        <View style={styles.overlayContainer}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  camera: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 200, // Increased size
    height: 300, // Increased size
    tintColor: 'red',
  },
});
