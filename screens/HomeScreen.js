import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as Speech from "expo-speech";

const HomeScreen = ({ navigation }) => {
  const speak = () => {
    const thingToSay =
      " SeeThrough is a navigation app designed for the visually impaired,providing audio guidance and detailed descriptions of surroundings.";
    Speech.speak(thingToSay);
  };

  useEffect(() => {
    speak();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SeeThru</Text>

      <Image
        source={require("../assets/blind.png")}
        style={styles.featureImage}
        accessibilityLabel="Blind person using the BlindNav app"
      />
      <Text style={styles.description}>
        SeeThru is a navigation app designed for the visually impaired,
        providing audio guidance and detailed descriptions of surroundings.
      </Text>
      <Text style={styles.featureDescription}>
        Get step-by-step audio instructions to navigate safely through streets,
        buildings, and public transport.
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#05B150" }]}
        onPress={() => navigation.navigate("Functions")}
      >
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    color: "#09BF46",
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    color: "#03822D",
    fontWeight: "600",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  featureImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  featureDescription: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HomeScreen;
