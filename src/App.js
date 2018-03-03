import React,  {Component}  from 'react';
import { View } from 'react-native';
import SwipeFunction from './components/SwipeFunction';

//this file is the nagavation file
class App extends Component{
  render(){
    return (
      <View>
        <SwipeFunction />
      </View>
    );
  }
}//end of the class function

export default App;
