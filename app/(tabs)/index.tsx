import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './homeScreen';
import PastMenu from './pastMenu'; // 新しい画面をインポート
import Ingredients from './Ingredients';
import 'react-native-url-polyfill/auto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PastMenu" component={PastMenu} options={{headerShown:false}}/> 
        <Stack.Screen name="Ingredent" component={Ingredients} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}