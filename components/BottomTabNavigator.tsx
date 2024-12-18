import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text ,StyleSheet} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type BottomTabNavigatorProps = {
//     navigation: NativeStackNavigationProp<{
//         PastMenu: undefined; 
//         Home:undefined;
//         Camera:undefined;
//       }>;
// }

const BottomTabNavigator=()=> {
  const navigation = useNavigation<NativeStackNavigationProp<{
      PastMenu: undefined; 
      Home: undefined;
      Camera: undefined;
  }>>();

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Camera')}>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('PastMenu')}>
        <Text>Past Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      backgroundColor: '#fff', // 背景色を設定
      borderTopWidth: 1,
      borderTopColor: '#ccc', // 上部の境界線
    },
    tabButton: {
      flex: 1,
      alignItems: 'center',
    },
  });