import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { loginStyles, COLORS } from '../../ui/styles/login.styles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput = ({ value, onChangeText }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextInput
      label="Contraseña"
      value={value}
      onChangeText={onChangeText}
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
  );
};

export default PasswordInput;