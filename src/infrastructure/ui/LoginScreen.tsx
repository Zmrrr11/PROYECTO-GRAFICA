import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View, Image, ImageBackground } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { loginStyles, COLORS } from './styles/login.styles';

const logoColegio = require('../../../assets/images/Logo.png');
const fondoColegio = require('../../../assets/images/Fondo.png'); 

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }  ) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    console.log("Ingresando con:", email);
  };

  return (
    <ImageBackground 
      source={fondoColegio} 
      style={loginStyles.backgroundImage} 
      resizeMode="cover"
      blurRadius={5} 
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={loginStyles.container}
      >
        <ScrollView contentContainerStyle={loginStyles.scroll}>
          <Card style={loginStyles.card}>
            <Card.Content style={loginStyles.content}>
              <View style={loginStyles.header}>
                <Image source={logoColegio} style={loginStyles.logoStyle} resizeMode="contain" />
                <Text variant="headlineMedium" style={loginStyles.title}>Colegio Saint Peter's</Text>
              </View>

              <TextInput
                label="Correo Institucional"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                style={loginStyles.input}
                activeOutlineColor={COLORS.SECONDARY_BLUE}
                left={<TextInput.Icon icon="email" />}
              />

              <TextInput
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={!showPassword}
                style={loginStyles.input}
                activeOutlineColor={COLORS.SECONDARY_BLUE}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon 
                    icon={showPassword ? "eye-off" : "eye"} 
                    onPress={() => setShowPassword(!showPassword)} 
                  />
                }
              />

              <Button 
                mode="contained" 
                onPress={handleLogin} 
                style={loginStyles.button}
                contentStyle={loginStyles.buttonContent}
              >
                INGRESAR
              </Button>

              <Button mode="text" onPress={() => navigation.navigate('Password')} textColor={COLORS.GRAY_TEXT}>
                ¿Olvidaste tu contraseña?
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;