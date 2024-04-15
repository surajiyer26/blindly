import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
  const [prompt, setPrompt] = useState('');

  const handlePress = () => {
    setPrompt('Say password...');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000); // waits 2 seconds before navigating
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <MaterialCommunityIcons name="microphone" size={40} color="white" />
      </TouchableOpacity>
      {prompt !== '' && <Text style={styles.prompt}>{prompt}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#2980b9',
    borderRadius: 50,
    elevation: 10, // Only works on Android
    shadowColor: '#000', // Only works on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  prompt: {
    marginTop: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
