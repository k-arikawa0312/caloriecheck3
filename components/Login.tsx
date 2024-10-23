import React from 'react';
import { View, Button, TouchableOpacity,Text } from 'react-native';
import  promptAsync  from '../hooks/useFirebaseAuth';

const LoginScreen = () => {
  return (
    <View>
      <TouchableOpacity  onPress={promptAsync}>
        <Text>ログイン</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;