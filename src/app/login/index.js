import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


export default class Login extends Component {
    
  render() {
    return (
      <View style={style.container}>
        <Text>Index App</Text>
        <TouchableHighlight>
        <Text>Login With Custom transition</Text>
        </TouchableHighlight>
        <TouchableHighlight>
        <Text>Login with default transition</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
 const style = StyleSheet.create({
   container: {
     flex: 1,

   }
 });
