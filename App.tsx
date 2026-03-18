import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import LoginScreen from './src/infrastructure/ui/LoginScreen';
import Password from './src/infrastructure/ui/Password';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {}
        <Stack.Navigator 
          id="root"
          screenOptions={{
            headerShown: false 
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Password" component={Password} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}