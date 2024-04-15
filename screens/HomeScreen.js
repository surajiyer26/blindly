import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Page!</Text>
      <Button
        title="Go to Navigate"
        onPress={() => navigation.navigate('Navigate')}
        color="#2980b9"
      />
      <Button
        title="Go to Directions"
        onPress={() => navigation.navigate('Directions')}
        color="#16a085"
      />
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
  text: {
    color: '#ecf0f1',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
