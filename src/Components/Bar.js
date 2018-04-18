import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
}from 'react-native';
import Card from './common/Card';
import { CardSection }  from './common';


class Bar extends Component {
  render() {
      const {
        place,
        imageStyle,
        thumbnailStyleContainer
        }=styles;
    return (

            <CardSection>
              <View style={thumbnailStyleContainer}>
                <ImageBackground
                style={imageStyle}
                source={{uri:this.props.place.image_url }}
                >
                    <Text style={place}>{this.props.place.name}</Text>
                </ImageBackground>

              </View>
            </CardSection>

    );
  }
}

const styles = StyleSheet.create({

  imageStyle: {
      flex: 1,
      height: 100,
      width: '100%',
    },

    thumbnailStyleContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
  },

  place: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'rgba(255,255,255,0.2)',
    flex:1,
    // alignSelf:'stretch'

  }

});

export default Bar;
