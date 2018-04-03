import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, placeholder, value }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    flex: 2
  },
  labelStyle: {
    padding: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }

};

export { Input };
