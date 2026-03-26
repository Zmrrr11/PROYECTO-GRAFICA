import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { loginStyles } from '../styles/login.styles';
import LoginHeader from '../components/Login/LoginHeader';
import EmailInput from '../components/Login/EmailInput';
import PasswordInput from '../components/Login/PasswordInput';
import LoginActions from '../components/Login/LoginActions';

// 1. IMPORTAMOS EL CONTROLADOR (HOOK)
import { useAuth } from '../hooks/useAuth';

const fondoColegio = require('../../assets/images/Fondo.png'); 

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // 2. INSTANCIAMOS EL CONTROLADOR
  const { login, loading } = useAuth();

  const handleLogin = async () => {
    // Validación básica de campos vacíos
    if (!email || !password) {
      Alert.alert("Atención", "Por favor ingresa tu correo y contraseña.");
      return;
    }

    // 3. LLAMADA AL CONTROLADOR (SUPABASE)
    const { user, error } = await login(email, password);

    if (error) {
      // Si hay error (credenciales mal, sin internet, etc.)
      Alert.alert("Error de Inicio de Sesión", error);
    } else if (user) {
      console.log("Bienvenido Zamir:", user.nombre);
      
      // 4. NAVEGACIÓN BASADA EN ROLES Y GRADOS
      // Pasamos el grado_id para que la siguiente pantalla sepa qué materias cargar
      navigation.replace('StudentHome', { 
        gradoId: user.estudiantes?.grado_id, 
        userName: user.nombre 
      });
    }
  };

  return (
    <ImageBackground source={fondoColegio} style={loginStyles.backgroundImage} resizeMode="cover" blurRadius={5}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={loginStyles.container}>
        <ScrollView contentContainerStyle={loginStyles.scroll}>
          <Card style={loginStyles.card}>
            <Card.Content style={loginStyles.content}>
              
              <LoginHeader />

              <EmailInput value={email} onChangeText={setEmail} />

              <PasswordInput value={password} onChangeText={setPassword} />

              {/* 5. MOSTRAR INDICADOR DE CARGA SI ESTÁ CONECTANDO */}
              {loading ? (
                <ActivityIndicator size="large" color="#6200ee" style={{ marginVertical: 20 }} />
              ) : (
                <LoginActions 
                  onLogin={handleLogin} 
                  onForgotPassword={() => navigation.navigate('Password')} 
                />
              )}

            </Card.Content>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;