import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { loginStyles, COLORS } from '../../styles/login.styles';

const logoColegio = require('../../../assets/images/Logo.png');

const LoginHeader = () => (
  <View style={loginStyles.header}>
    <Image source={logoColegio} style={loginStyles.logoStyle} resizeMode="contain" />
    <Text variant="headlineMedium" style={loginStyles.title}>Colegio Saint Peter's</Text>
  </View>
);

export default LoginHeader;