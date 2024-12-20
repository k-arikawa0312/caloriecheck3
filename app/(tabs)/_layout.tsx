import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homeScreen'; 
import CameraComponet from './camera'; 
import PastMenu from "./pastMenu"; 
import Ingredients from "./Ingredients";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // ヘッダーを隠す
        />
        <Stack.Screen 
          name="Camera" 
          component={CameraComponet} 
          options={{ headerShown: false }} // ヘッダーを隠す
        />
        <Stack.Screen 
          name="PastMenu" 
          component={PastMenu} 
          options={{ headerShown: false }} // ヘッダーを隠す
        />
        <Stack.Screen
          name="Ingredients"
          component={Ingredients}
          options={{headerShown:false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
