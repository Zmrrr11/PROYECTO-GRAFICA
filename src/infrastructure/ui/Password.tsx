import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { loginStyles } from './styles/login.styles';
import EmailInput from '../components/Login/EmailInput';
import RecoveryHeader from '../components/Recovery/RecoveryHeader';
import RecoveryActions from '../components/Recovery/RecoveryActions';

const fondoColegio = require('../../../assets/images/Fondo.png');

const Password = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    alert('Se ha enviado un código a su correo');
  };

  return (
    <ImageBackground source={fondoColegio} style={loginStyles.backgroundImage} blurRadius={5}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={loginStyles.container}
      >
        <ScrollView contentContainerStyle={loginStyles.scroll}>
          <Card style={loginStyles.card}>
            <Card.Content style={loginStyles.content}>
              
              <RecoveryHeader />

              <EmailInput value={email} onChangeText={setEmail} />

              <RecoveryActions 
                onSend={handleSend} 
                onBack={() => navigation.goBack()} 
              />

            </Card.Content>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Password;