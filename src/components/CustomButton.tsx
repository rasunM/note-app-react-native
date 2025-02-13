import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function CustomButton() {
  return (
    <View style={style.container}>
      <Text style={style.text}>LOG IN</Text>
    </View>
  );
}

export default CustomButton;

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#0E3994',
    paddingHorizontal: 60,
    borderRadius: 50
  },
  text: {
    color: 'white',
  },
});
