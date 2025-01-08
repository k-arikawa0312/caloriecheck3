import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text ,StyleSheet} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { contentHeight, windowHeight } from '@/constants/Responsive';

// type BottomTabNavigatorProps = {
//     navigation: NativeStackNavigationProp<{
//         PastMenu: undefined; 
//         Home:undefined;
//         Camera:undefined;
//       }>;
// }

const BottomTabNavigator = () => {
  const navigation = useNavigation<NativeStackNavigationProp<{
      Ingredients: undefined; 
      Home: undefined;
      Camera: undefined;
  }>>();

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name='home'/>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Camera')}>
        <Ionicons name='camera'/>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Ingredients')}>
        <Ionicons name='cart'/>
        <Text>Ingredient</Text>
      </TouchableOpacity>
    </View>
  );
};


export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabContainer: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 10,
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      height: '30%', // 高さを指定
    },
    tabButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', // ボタンの内容を垂直方向にもセンタリング
    },
  });