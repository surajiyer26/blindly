import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DirectionsScreen from '../screens/DirectionsScreen';
import NavigateScreen from '../screens/NavigateScreen';


const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Directions" component={DirectionsScreen} />
                <Tab.Screen name="Navigation" component={NavigateScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}