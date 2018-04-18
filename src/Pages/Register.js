import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  AsyncStorage,
  Dimensions } from 'react-native';
import axios from 'axios';
import Button from '../Components/Button';
import Input from '../Components/Input';

const ACCESS_TOKEN = 'ssdfsd';
const { height } = Dimensions.get('window');

export default class Register extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  }

  state = {
    email: '',
    username: '',
    mobile: '',
    password: '',
    confirm_password: '',
    firstname: '',
    errorfirstname: '',
    errorlastname: '',
    erroremail: '',
    errorusername: '',
    errormobile: '',
    errorpassword: '',
    errorconfirm_password: '',
    errornon_field_errors: '',
  }

  onButtonPress() {
    this.setState({
      erroremail: '',
      errorusername: '',
      errormobile: '',
      errorpassword: '',
      errorconfirm_password: '',
      errorfirstname: '',
      errorlastname: '',
      errornon_field_errors: ''
    });
    const { email, username, mobile, password, confirm_password, firstname, lastname } = this.state;
    axios.post('http://127.0.0.1:8000/foodycall_back/v1/auth/register/', { email, username, mobile, password, confirm_password, firstname, lastname })
    .then((response) => {
      if (response.status === 201) {
        const loginCredintial = { mobile, password };
        this.storeCredintial(loginCredintial);
        this.props.navigation.navigate('MainPage');
      }
    })
    .catch((error) => {
      this.setState({
        erroremail: error.response.data.email,
        errorusername: error.response.data.username,
        errormobile: error.response.data.mobile,
        errorpassword: error.response.data.password,
        errorconfirm_password: error.response.data.confirm_password,
        errorfirstname: error.response.data.firstname,
        errorlastname: error.response.data.lastname,
        errornon_field_errors: error.response.data.non_field_errors
      });
      //console.log(error.response.data);
    });
  }

  async storeCredintial(arg) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, JSON.stringify(arg));
    } catch (error) {
      //console.log('Something went wrong when storing credintial');
    }
  }

  render() {
    return (
      <ImageBackground
      source={{ uri: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg' }}
       style={styles.imageContainer}
       blurRadius={3}
      >
        <View style={styles.container}>
          <Text style={styles.logoText}>FoodiCall</Text>
          <ScrollView style={styles.ScrollView}>
          <View style={styles.container}>
          <Text style={styles.errorText}>{this.state.errornon_field_errors}</Text>
            <Input
            errorText={this.state.errorfirstname}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your First Name'}
            placeholderTextColor={'black'}
            autoCorrect={false}
            returnKeyType={'next'}
            value={this.state.firstname}
            onChangeText={firstname => this.setState({ firstname })}
            />
            <Input
            errorText={this.state.errorlastname}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Last Name'}
            placeholderTextColor={'black'}
            autoCorrect={false}
            returnKeyType={'next'}
            value={this.state.lastname}
            onChangeText={lastname => this.setState({ lastname })}
            />
            <Input
            errorText={this.state.errormobile}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Numder'}
            placeholderTextColor={'black'}
            keyboardType={'numeric'}
            autoCorrect={false}
            returnKeyType={'next'}
            value={this.state.mobile}
            onChangeText={mobile => this.setState({ mobile })}
            />
            <Input
            errorText={this.state.erroremail}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Email'}
            placeholderTextColor={'black'}
            keyboardType={'email-address'}
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
            <Input
            errorText={this.state.errorusername}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Username'}
            placeholderTextColor={'black'}
            autoCorrect={false}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            />
            <Input
            errorText={this.state.errorpassword}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Enter Your Password'}
            placeholderTextColor={'black'}
            autoCorrect={false}
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
            <Input
            errorText={this.state.errorconfirm_password}
            style={styles.inputStyle}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholder={'Confurm Your Password'}
            placeholderTextColor={'black'}
            autoCorrect={false}
            secureTextEntry
            value={this.state.confirm_password}
            onChangeText={confirm_password => this.setState({ confirm_password })}
            />
            <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonText}
            buttonText={'Register'}
            onPress={() => this.onButtonPress()}
            />
          <View style={styles.option2}>
          <Text style={styles.singUpText}>Already Have an account? </Text>
          <Text
            style={styles.singUpText}
            onPress={() => this.props.navigation.goBack()}
          >Sign in
          </Text>
      </View>
        </View>
        </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoText: {
    fontSize: 50,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Snell Roundhand',
  },
  option2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 50
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
  },
  buttonStyle: {
    width: 150,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
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
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  errorText: {
    paddingLeft: 20,
    color: 'red'
  },
  ScrollView: {
    height
  }
});
