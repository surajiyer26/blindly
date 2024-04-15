import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NavigateScreen from "./screens/NavigateScreen";
import DirectionsScreen from "./screens/DirectionsScreen";
import CompassScreen from "./screens/CompassScreen";
import MapScreen from "./screens/MapScreen";
import Functions from "./screens/Functions";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Navigate" component={NavigateScreen} />
        <Stack.Screen name="Directions" component={DirectionsScreen} />
        <Stack.Screen name="Compass" component={CompassScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Functions" component={Functions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
