import React from 'react';
import { Text } from 'react-native-paper';
import { loginStyles, COLORS } from '../../styles/login.styles';

const RecoveryHeader = () => (
  <>
    <Text variant="headlineSmall" style={[loginStyles.title, { marginBottom: 10 }]}>
      Recuperar Acceso 
    </Text>
    
    <Text style={{ color: COLORS.GRAY_TEXT, marginBottom: 20, textAlign: 'center' }}>
      Ingresa tu correo institucional para reestablecer tu contraseña.
    </Text>
  </>
);

export default RecoveryHeader;