import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homeScreen'; // 必要に応じてインポート
import CameraComponet from './camera'; // カメラ画面をインポート
import PastMenu from "./pastMenu"; // 他の画面をインポート
import CameraComponent from "./camera";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
