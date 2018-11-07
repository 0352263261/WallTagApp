import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonRegister = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B98F0',
    height: 54
  }
};

export default ButtonRegister;
