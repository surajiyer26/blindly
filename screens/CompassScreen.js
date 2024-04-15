import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Vibration } from 'react-native';

function CompassScreen() {
  const [rotation, setRotation] = useState(0);

  const randomizeDirection = () => {
    // Generate a random angle between 0 and 360 degrees
    const newRotation = Math.floor(Math.random() * 360);
    setRotation(newRotation);
    Vibration.vibrate(500); // Vibrate the phone for 500 milliseconds
  };

  useEffect(() => {
    const interval = setInterval(randomizeDirection, 1500); // Change direction every 1.5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={randomizeDirection} style={styles.compassContainer}>
        <Image
          source={require('../assets/compass_ring.png')}
          style={styles.compassRing}
        />
        <Image
          source={require('../assets/compass_arrow.png')}
          style={[styles.compassArrow, { transform: [{ rotate: `${rotation}deg` }] }]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  compassContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  compassRing: {
    position: 'absolute',
    width: 550,
    height: 550,
    resizeMode: 'contain',
  },
  compassArrow: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
});

export default CompassScreen;
