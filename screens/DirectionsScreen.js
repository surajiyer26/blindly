import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Speech from "expo-speech";

function DirectionsScreen() {
  const [directions, setDirections] = useState("");

  const speak = () => {
    const thingToSay =
      "Go five steps to the right, then turn left, and go straight till you reach a door";
    Speech.speak(thingToSay);
  };

  const handlePress = () => {
    // Clear previous directions if any
    setDirections("");
    // Set a timeout to display the directions after 5 seconds
    setTimeout(() => {
      setDirections(
        "Go five steps to the right, then turn left, and go straight till you reach a door"
      );
      speak();
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.micButton}>
        <Image
          source={require("../assets/mic.png")} // Make sure to have a mic icon in your assets folder
          style={styles.micIcon}
        />
      </TouchableOpacity>
      {directions ? (
        <Text style={styles.directionsText}>{directions}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  micButton: {
    width: 200,
    height: 200,
    borderRadius: 35,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  micIcon: {
    width: 100,
    height: 150,
  },
  directionsText: {
    color: "#ecf0f1",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default DirectionsScreen;
