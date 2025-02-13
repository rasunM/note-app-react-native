import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CredentialsButtonProps} from '../types/component_types';

function CredentialsButton({logo, title, bgColor}: CredentialsButtonProps) {
  return (
    <View style={[style.container, {borderColor: bgColor}]}>
      <Image source={logo} style={style.image} />
      <Text style={style.text}>{title}</Text>
    </View>
  );
}

export default CredentialsButton;

const style = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: 150,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    backgroundColor: 'white'    
  },
  text: {
    color: 'black',
  },
  image: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 100,
  },
});
