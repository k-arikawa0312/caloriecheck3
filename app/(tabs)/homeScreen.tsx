import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './indexStyle';
import PastMenu from './pastMenu';

// ナビゲーションの型を定義
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<{
    PastMenu: undefined; 
  }>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) { // 型を指定

  return (
    <View>
      <Text style={styles.spTitleContainer}>Calorie Checker</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PastMenu')}> {/* 遷移を追加 */}
        <Text>メニュー</Text>
      </TouchableOpacity>
    </View>
  );
}
  