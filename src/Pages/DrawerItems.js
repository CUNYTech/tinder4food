import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, Text, ScrollView, Dimensions } from 'react-native';
import Button from '../Components/Button';

const ACCESS_TOKEN = 'ssdfsd';
const { height } = Dimensions.get('window');

export default class DrawerItems extends Component {

  logOut() {
    AsyncStorage.removeItem(ACCESS_TOKEN);
    this.props.navigation.navigate('LoginPage');
  }

  render() {
    return (
      
    <View>
      <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
      Groups
        </Text>
      </View>
      <ScrollView style={{ height }}>
      <Button 
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonText}
        buttonText={'Create Groups'}
        onPress={() => this.props.navigation.navigate('AddGroupPage',
        { transition: 'fromBottomtoTop' })}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonText}
        buttonText={'Logout'}
        onPress={() => this.logOut()} 
      />
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgb(0,122,255)'
  },
  buttonStyle: {
    width: 300,
    height: 70,
    backgroundColor: 'rgb(232, 235, 239)',
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 5,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
