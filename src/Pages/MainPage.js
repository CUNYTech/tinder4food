import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Header, Right, Left, Button } from 'native-base';
//import Header from '../Components/Header';
import SwipeFunction from '../Components/SwipeFunction';


export default class MainPage extends Component {

  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerToggle')} >
              <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 35 }} />
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('ProfilePage')}>
              <Icon name='person' style={{ fontSize: 35 }} active />
            </Button>
          </Right>
        </Header>
        <SwipeFunction />
      </View>
    );
  }
}
