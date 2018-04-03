import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


export default class Index extends Component {
    
  render() {
    return (
      <View style={style.container}>
        <Text>Index App</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login', { transition: 'fromToptoBottom' })}>
        <Text>Login With Custom transition</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
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
