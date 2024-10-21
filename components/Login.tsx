import React from 'react';
import { View, Button } from 'react-native';
import signInWithGoogle from '../hooks/useFirebaseAuth';

const LoginScreen = () => {
  return (
    <View>
      <Button title="Googleでログイン" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;