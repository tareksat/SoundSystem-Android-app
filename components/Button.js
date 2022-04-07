import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, status }) => {
  const { buttonStyle_on, buttonStyle_off, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={status==='ON'? buttonStyle_on:buttonStyle_off }>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle_on: {
    flex: 0.5,
    backgroundColor: '#92CBC5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonStyle_off: {
    flex: 0.5,
    width: 150,
    backgroundColor: '#6E6E6E',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
