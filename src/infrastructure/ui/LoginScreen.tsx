import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { loginStyles } from './styles/login.styles';
import LoginHeader from '../components/Login/LoginHeader';
import EmailInput from '../components/Login/EmailInput';
import PasswordInput from '../components/Login/PasswordInput';
import LoginActions from '../components/Login/LoginActions';

const fondoColegio = require('../../../assets/images/Fondo.png'); 

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => console.log("Ingresando con:", email);

  return (
    <ImageBackground source={fondoColegio} style={loginStyles.backgroundImage} resizeMode="cover" blurRadius={5}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={loginStyles.container}>
        <ScrollView contentContainerStyle={loginStyles.scroll}>
          <Card style={loginStyles.card}>
            <Card.Content style={loginStyles.content}>
              
              <LoginHeader />

              <EmailInput value={email} onChangeText={setEmail} />

              <PasswordInput value={password} onChangeText={setPassword} />

              <LoginActions 
                onLogin={handleLogin} 
                onForgotPassword={() => navigation.navigate('Password')} 
              />

            </Card.Content>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;