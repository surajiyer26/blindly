import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Functions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2B8953" }]}
          onPress={() => navigation.navigate("Navigate")}
        >
          <Image
            source={require("../assets/navigation-icon.jpg")}
            style={styles.featureImage}
            accessibilityLabel="Blind person using the BlindNav app"
          />
          <Text style={styles.buttonText}>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2B8953" }]}
          onPress={() => navigation.navigate("Directions")}
        >
          <Image
            source={require("../assets/directions-icon.png")}
            style={styles.featureImage}
            accessibilityLabel="Blind person using the BlindNav app"
          />
          <Text style={styles.buttonText}>Get Directions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2B8953" }]}
          onPress={() => navigation.navigate("Compass")}
        >
          <Image
            source={require("../assets/compass-icon.png")}
            style={styles.featureImage}
            accessibilityLabel="Blind person using the BlindNav app"
          />
          <Text style={styles.buttonText}>Compass</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2B8953" }]}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            source={require("../assets/map-icon.png")}
            style={styles.featureImage}
            accessibilityLabel="Blind person using the BlindNav app"
          />
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 20,
  },
  button: {
    flex: 1,
    maxWidth: "45%", // Adjust as needed
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  featureImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Functions;
