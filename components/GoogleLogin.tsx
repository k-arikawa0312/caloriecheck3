import React from 'react';
import { View, Button, TouchableOpacity,Text } from 'react-native';
import  signIn  from '../hooks/useGoogleFirebaseAuth';

const GoogleLogin = () => {
  return (
    <View>
      <TouchableOpacity  onPress={signIn}>
        <Text>ログイン</Text>
        </TouchableOpacity>
    </View>
  );
};

export default GoogleLogin;