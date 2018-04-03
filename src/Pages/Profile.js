import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { DeckSwiper, Card, CardItem, Text, Icon, Header, Right, Button } from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../Image/pastaveg_640x480.jpg'),
  },
];


export default class ProfilePage extends Component {

  static navigationOptions = {
    mode: 'modal',
    header: null,
    //gesturesEnabled: false
  }

  render() {
    return (
      
      <View>
        <Header>
        <Right>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name='arrow-forward' active />
        </Button>
        </Right>
        </Header>

          <View style={{ margin: 10 }}>
            <DeckSwiper
              dataSource={cards}
              renderItem={item =>
                <Card style={{ elevation: 3 }}>
                  <CardItem cardBody>
                    <Image style={{ height: 400, flex: 1 }} source={item.image} />
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              }
            />
          </View>

      </View>
    );
  }
}
