import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Speech from "expo-speech";

function MapScreen() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  const speak = (text) => {
    const thingToSay = "you are at" + text;
    Speech.speak(thingToSay);
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.warn("Location permission denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    fetchAddress(location.coords.latitude, location.coords.longitude);
  };

  const fetchAddress = async (latitude, longitude) => {
    let locationInfo = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    if (locationInfo.length > 0) {
      console.log(locationInfo);
      const { formattedAddress } = locationInfo[0];
      const fullAddress = `${formattedAddress}`;
      speak(formattedAddress);
      setAddress(fullAddress);
    }
  };

  return (
    <View style={styles.container}>
      {location && (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
          <Text style={styles.address}>{address}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  address: {
    position: "absolute",
    bottom: 20,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 5,
    borderRadius: 5,
    zIndex: 1000,
  },
});

export default MapScreen;
