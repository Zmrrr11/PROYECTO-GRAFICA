import React from 'react';
import { TextInput } from 'react-native-paper';
import { loginStyles, COLORS } from '../../styles/login.styles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const EmailInput = ({ value, onChangeText }: Props) => (
  <TextInput
    label="Correo Institucional"
    value={value}
    onChangeText={onChangeText}
    mode="outlined"
    style={loginStyles.input}
    activeOutlineColor={COLORS.SECONDARY_BLUE}
    left={<TextInput.Icon icon="email" />}
  />
);

export default EmailInput;