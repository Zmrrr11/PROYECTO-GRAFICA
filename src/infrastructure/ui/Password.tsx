import React, { useState } from 'react';
import { View, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { loginStyles, COLORS } from './styles/login.styles';

const fondoColegio = require('../../../assets/images/Fondo.png');

const Password = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  return (
    <ImageBackground source={fondoColegio} style={loginStyles.backgroundImage} blurRadius={5}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={loginStyles.container}
      >
        <ScrollView contentContainerStyle={loginStyles.scroll}>
          <Card style={loginStyles.card}>
            <Card.Content style={loginStyles.content}>
              <Text variant="headlineSmall" style={[loginStyles.title, { marginBottom: 10 }]}>
                Recuperar Acceso 
              </Text>
              
              <Text style={{ color: COLORS.GRAY_TEXT, marginBottom: 20, textAlign: 'center' }}>
                Ingresa tu correo institucional para reestablecer tu contraseña.
              </Text>

              <TextInput
                label="Correo Institucional"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                style={loginStyles.input}
                activeOutlineColor={COLORS.SECONDARY_BLUE}
                left={<TextInput.Icon icon="email" />}
              />

              <Button 
                mode="contained" 
                style={loginStyles.button} 
                contentStyle={loginStyles.buttonContent}
                onPress={() => alert('Se ha enviado un código a su correo')}
              >
                ENVIAR
              </Button>

              <Button 
                mode="text" 
                onPress={() => navigation.goBack()} 
                textColor={COLORS.SECONDARY_BLUE}
              >
                Regresar
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Password;