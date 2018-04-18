import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, AsyncStorage } from 'react-native';
import axios from 'axios';
import Button from '../Components/Button';
import Input from '../Components/Input';

const ACCESS_TOKEN = 'ssdfsd';

export default class Login extends Component {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  }

  state = {
    mobile: '+11234567890',
    password: 'fake',
    errorMobile: '',
    errorPasseord: '',
    nonFieldErrors: '',
 }

  componentWillMount() {
   // this.verifyUserAllreadyLogin();
  }


  onButtonPress = (mobile, password) => {
    this.setState({
      errorMobile: '',
      errorPasseord: '',
      non_field_errors: '' });
        axios.post('http://foodiecallapi-dev.us-east-1.elasticbeanstalk.com/foodycallAPI/v1/auth/login/', { mobile, password })
        .then((response) => {
          if (response.status === 200) {
            const loginCredintial = { mobile, password };
            this.storeCredintial(loginCredintial);
            this.props.navigation.navigate('MainPage', { Token: response.data.token });
          }
        })
        .catch((error) => {
          this.setState({
            errorMobile: error.response.data.mobile,
            errorPasseord: error.response.data.password,
            nonFieldErrors: error.response.data.non_field_errors
          });
          //console.log(error.response.data);
        });
        this.props.navigation.navigate('MainPage');
  }

  async storeCredintial(arg) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, JSON.stringify(arg));
    } catch (error) {
      //console.log('Something went wrong when storing credintial');
    }
  }

  async verifyUserAllreadyLogin() {
    const userCredintial = await AsyncStorage.getItem(ACCESS_TOKEN);
    if (userCredintial) {
      const parsed = JSON.parse(userCredintial);
      const mobile = parsed.mobile;
      const password = parsed.password;
      axios.post('http://127.0.0.1:8000/foodycall_back/v1/auth/login/', { mobile, password })
          .then((response) => {
            if (response.status === 200) {
            this.props.navigation.navigate('MainPage', { Token: response.data.token });
            }
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    }
  }

  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://images.theconversation.com/files/180401/original/file-20170731-22175-67v3q2.jpg?ixlib=rb-1.1.0&rect=0%2C589%2C5472%2C2654&q=45&auto=format&w=1356&h=668&fit=crop' }}
        style={styles.container}
        blurRadius={3}
      >
        <View style={styles.container}>
          <View style={styles.option}>
            <Text style={styles.logoText}>FoodiCall</Text>
          </View>

          <Text style={styles.errorText}>{this.state.nonFieldErrors}</Text>

          <Input
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Number'}
            placeholderTextColor={'black'}
            keyboardType={'phone-pad'}
            autoCorrect={false}
            maxLength={12}
            value={this.state.mobile}
            onChangeText={(val) => this.setState({ mobile: val })}
            errorText={this.state.errorMobile}
          />

          <Input
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Password'}
            placeholderTextColor={'black'}
            keyboardType={'default'}
            autoCorrect={false}
            secureTextEntry
            value={this.state.password}
            onChangeText={(val) => this.setState({ password: val })}
            errorText={this.state.errorPasseord}
          />

          <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonText}
            buttonText={'Login'}
            onPress={() => this.onButtonPress(this.state.mobile, this.state.password)}
          />

          <View style={styles.option2}>
            <Text style={styles.singUpText}>Don't Have an account yet? </Text>
            <Text
              style={styles.singUpText}
              onPress={() => this.props.navigation.navigate('RegisterPage')}
            >Sign Up
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
option2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  logoText: {
    fontSize: 50,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Snell Roundhand',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 4
  },
  singUpText: {
    shadowOffset: { width: 5, height: 5, },
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 3,
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
  inputStyle: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 19,
    color: 'black',
    marginVertical: 10,
    shadowOffset: { width: 5, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  buttonStyle: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    shadowOffset: { width: 5, height: 7 },
    shadowColor: 'black',
    shadowOpacity: 9.0,
    shadowRadius: 3
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  errorText: {
    paddingLeft: 20,
    color: 'red'
}
});
