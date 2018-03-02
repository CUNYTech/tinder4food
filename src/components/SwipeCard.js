import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Cards extends Component {
  componentWillMount(){
    this.pan = new Animated.ValueXY()

    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),

      onPanResponderRelease: (e,{dx}) => {
        const absDx = Math.abs(dx);
        const direction =  absDx / dx;

        if(absDx > 120){
          Animated.decay(this.pan, {
            velocity: {x:3 * direction, y:0},
            deceleration: 0.995,
          }).start(this.props.onSwipeOff)
        }else{
          Animated.spring(this.pan, {
            toValue: {x:0, y:0},
            friction:3.5,
          }).start()
        }
      },
    })
  }

  render() {
    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    })

    const animatedStyle = {
      transform: [
        {translateX: this.pan.x},
        {translateY: this.pan.y},
        {rotate:rotateCard},
      ],
    }

    return (
      <Animated.View
        onStartShouldSetResponder = {this.cardPanResponder.panHandlers.onStartShouldSetResponder}
        onResponderMove = {this.cardPanResponder.panHandlers.onResponderMove}
        onResponderRelease = {this.cardPanResponder.panHandlers.onResponderRelease}

        style={[styles.card, animatedStyle]}>
        <Image
          style={styles.ImageStyle}
          source={{uri:this.props.profile.imageURL}}
        />

        <View style={styles.CardDescriptionStyles}>
          <Text style={{fontSize:25}}>{this.props.profile.name}</Text>
          <Text style={{fontSize:15,color:'blue',}}>{this.props.profile.bio}</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    top: (height * 0.3) / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
  },
  ImageStyle: {
    flex:1,
  },
  CardDescriptionStyles: {
    margin:20,
  },

});

export default SwipeCard;
