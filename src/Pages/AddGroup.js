import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Header, Left, Button } from 'native-base';


export default class MainPage extends Component {

  static navigationOptions = {
    mode: 'modal',
    header: null,
    gesturesEnabled: false
  }

  render() {
    return (
      
      <View>
        <Header>
          <Left>
            <Button 
              transparent 
              style={{ marginBottom: 25 }} 
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='close' style={{ fontSize: 42, paddingBottom: 10 }} />
            </Button>
          </Left>
        </Header>
      </View>
    );
  }
}
