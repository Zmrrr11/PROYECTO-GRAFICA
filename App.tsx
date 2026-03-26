import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

// PANTALLAS EXISTENTES
import LoginScreen from './src/screens/LoginScreen';
import Password from './src/screens/Password';
import StudentHomeScreen from './src/screens/StudentHomeScreen';
import TasksScreen from './src/screens/TasksScreen'; 

// --- AÑADIDO: IMPORT DE LA PANTALLA DE SUBIDA ---
import Upload from './src/screens/Upload'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          id="root"
          screenOptions={{
            headerShown: false 
          }}
        >
          {/* Pantalla inicial */}
          <Stack.Screen name="Login" component={LoginScreen} />
          
          <Stack.Screen name="Password" component={Password} />

          {/* REGISTRA EL DESTINO PARA EL LOGIN */}
          <Stack.Screen 
            name="StudentHome" 
            component={StudentHomeScreen} 
          />

          {/* REGISTRO DE LA PANTALLA DE TAREAS */}
          <Stack.Screen 
            name="TasksScreen" 
            component={TasksScreen} 
          />

          {/* --- AÑADIDO: REGISTRO DE LA PANTALLA DE SUBIDA --- */}
          <Stack.Screen 
            name="Upload" 
            component={Upload} 
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}