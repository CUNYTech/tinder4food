import React,  {Component}  from 'react';
import { View } from 'react-native';
import SignUp  from './components/SignUp'
//this file is the nagavation file
class App extends Component{
  render(){
    return (
      <View>
        <SignUp />
      </View>
    );
  }
}//end of the class function

export default App;
