import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './indexStyle';
import PastMenu from './pastMenu';
import BottomTabNavigator from '@/components/BottomTabNavigator';
import { Ionicons } from '@expo/vector-icons';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<{
    PastMenu: undefined; 
  }>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) { 

  return (
    <View>
      <Text style={styles.spTitleContainer}>Calorie Checker</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PastMenu')}> 
        <Text>メニュー</Text>
        <Ionicons name="menu" size={50}/>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Ionicons name='cart'style={{width:1,height:500}}/>
      </TouchableOpacity> */}
      <BottomTabNavigator/>
    </View>
  );
}
  