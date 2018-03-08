import React,  {Component}  from 'react';
import { AppRegistry, View } from 'react-native';
import SwipeFunction from './src/components/SwipeFunction';

const App = () => (
      <View>
        <SwipeFunction />
      </View>
);
AppRegistry.registerComponent('tinder4food', () => App);
