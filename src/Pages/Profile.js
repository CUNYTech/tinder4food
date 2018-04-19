import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import axios from 'axios';
import { DeckSwiper, Card, CardItem, Text, Icon, Header, Right, Button } from 'native-base';
import Bar from '../Components/Bar';
import { CardSection } from '../Components/common';

const config = {
  headers: {'Authorization': 'Bearer 8PFnRjBdeczBvlqjph1bzECWVbJDj_p4wpjf1fHFinCrNBfw5bjhsRF60TpwjjEQoyEesUm8vjG8taEzjXxI1XIRNYiPm8akqUgjxk6gUaVGMnKvsic8zIy-XfeYWnYx'},
  params: {
    term: "food",
    location: '11377',
  }
};

export default class ProfilePage extends Component {

  static navigationOptions = {
    mode: 'modal',
    header: null,
    //gesturesEnabled: false
  }
  state = { recents: [] }

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => this.setState({ recents: response.data.businesses }));
    }

  renderPlaces(){
    return this.state.recents.map(data =>
      <Bar key={data.id} place={data} />
    );
  }

  render() {
    return (

      <View style ={{flex:1}}>
          <Header>
          <Text style = {styles.textStyle}> Profile </Text>
          <Right>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-forward' active />
          </Button>
          </Right>
          </Header>

          <View style={styles.container}>

            <View style={styles.profilePicture}>
            <ImageBackground
              style={styles.back}
              blurRadius={9}
              source={require('../Image/jamesPicture.jpg')}>
                <Image style={styles.imageStyle}
                  source={require('../Image/jamesPicture.jpg')}>
                </Image>
            </ImageBackground>
            </View>

            <View>
              <CardSection>
                <Text style={styles.nameStyle}>Name: Luke Hemsworth </Text>
              </CardSection>
            </View>

            <View style ={{backgroundColor:'black'}}>
              <Text style={styles.textStyle}> - History - </Text>
            </View>

            <ScrollView style={{flex:1}}>
              {this.renderPlaces()}
            </ScrollView>

          </View>

        </View>

     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },

  imageStyle: {
    // borderColor: 'white',
    // borderWidth: 2,
    height: '50%',
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 50,
    paddingBottom: 50,
    borderWidth: 2

  },

  profilePicture: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
    borderColor: '#000',
    borderWidth: .5,

  },

  informationBar: {
    flex: 1,
    backgroundColor: '#FFEEE4',
  },
  nameStyle: {
    flex:1,
    color: 'black',
    fontFamily:'Cochin'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: "center",
    color:"white"
  },
  back: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
