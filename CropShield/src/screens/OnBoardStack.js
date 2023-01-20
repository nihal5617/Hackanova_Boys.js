import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from './onBoard/ForgotPassword';
import Login from './onBoard/Login';
import Signup from './onBoard/Signup';

const Stack = createNativeStackNavigator();

export default function OnBoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}