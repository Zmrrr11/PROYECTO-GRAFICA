import React from 'react';
import { Button } from 'react-native-paper';
import { loginStyles, COLORS } from '../../styles/login.styles';

interface Props {
  onLogin: () => void;
  onForgotPassword: () => void;
}

const LoginActions = ({ onLogin, onForgotPassword }: Props) => (
  <>
    <Button 
      mode="contained" 
      onPress={onLogin} 
      style={loginStyles.button}
      contentStyle={loginStyles.buttonContent}
    >
      INGRESAR
    </Button>

    <Button 
      mode="text" 
      onPress={onForgotPassword} 
      textColor={COLORS.GRAY_TEXT}
    >
      ¿Olvidaste tu contraseña?
    </Button>
  </>
);

export default LoginActions;