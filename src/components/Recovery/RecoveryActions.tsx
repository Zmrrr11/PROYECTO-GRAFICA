import React from 'react';
import { Button } from 'react-native-paper';
import { loginStyles, COLORS } from '../../styles/login.styles';

interface Props {
  onSend: () => void;
  onBack: () => void;
}

const RecoveryActions = ({ onSend, onBack }: Props) => (
  <>
    <Button 
      mode="contained" 
      style={loginStyles.button} 
      contentStyle={loginStyles.buttonContent}
      onPress={onSend}
    >
      ENVIAR
    </Button>

    <Button 
      mode="text" 
      onPress={onBack} 
      textColor={COLORS.SECONDARY_BLUE}
    >
      Regresar
    </Button>
  </>
);

export default RecoveryActions;