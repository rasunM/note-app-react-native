import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextFieldProps} from '../types/component_types';

function InputFieldCustom({
  icon,
  placeholder,
  borderEnabled,
  onClickData,
}: TextFieldProps) {
  return (
    <View style={styles.inputFieldMainContainer}>
      <View
        style={[
          styles.inputFieldcontainer,
          {borderColor: borderEnabled ? '#138CA1' : '#EEEEEE'},
        ]}>
        <Icon name={icon} size={18} style={{color: 'black'}} />
        <TextInput
          style={styles.inputTextContainer}
          placeholder={placeholder}
          onChangeText={onClickData}
        />
      </View>
    </View>
  );
}

export default InputFieldCustom;

const styles = StyleSheet.create({
  inputFieldMainContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  inputFieldcontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor: '#FAF7F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 100,
    borderWidth: 2,
  },
  inputTextContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FAF7F7',
    borderRadius: 100,
    marginLeft: 15,
  },
});
