import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const Button = (props) => {
    const { 
        underlineColorAndroid,  
        placeholder, 
        placeholderTextColor, 
        keyboardType, 
        autoCorrect,
        secureTextEntry,
        value,
        autoFocus,
        returnKeyType,
        maxLength,
        onChangeText,
        style,
        onSubmitEditing,
        errorText,
    } = props;
    return (
        <View>
        <Text style={styles.errorText}>{errorText}</Text>
        <TextInput 
            style={style}
            keyboardAppearance={'dark'}
            underlineColorAndroid={underlineColorAndroid}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType || 'default'}
            autoCorrect={autoCorrect}
            returnKeyType={returnKeyType}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            value={value}
            maxLength={maxLength}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
        </View>
    );
};
const styles = StyleSheet.create({
    errorText: {
        paddingLeft: 20,
        color: 'red'
    }
  });
  

export default Button;
