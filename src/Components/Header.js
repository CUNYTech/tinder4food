import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './Button';

const Header = (props) => {
    const { 
      title, 
      headerLeftPress, 
      headerLeftText, 
      headerRightPress, 
      headerRightText, 
      headerRightbuttonImage,
      headerRightbuttonImageStyle,
      headerLeftbuttonImage,
      headerLeftbuttonImageStyle,
      leftheaderbuttonStyle,
      rightheaderbuttonStyle } = props;
    return (
        <View style={styles.container}>
            <Button 
            buttonStyle={leftheaderbuttonStyle || styles.buttonStyle}
            buttonTextStyle={styles.buttonText}
            buttonText={headerLeftText}
            buttonImage={headerLeftbuttonImage}
            buttonImageStyle={headerLeftbuttonImageStyle}
            onPress={headerLeftPress}
            />
            <Text style={styles.headerTitle}>{title}</Text>
            <Button 
            buttonStyle={rightheaderbuttonStyle || styles.buttonStyle}
            buttonTextStyle={styles.buttonText}
            buttonText={headerRightText}
            buttonImage={headerRightbuttonImage}
            buttonImageStyle={headerRightbuttonImageStyle}
            onPress={headerRightPress}
            />
        </View>
    );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    elevation: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
    borderColor: 'rgb(0,122,255)'
  },
  buttonStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'rgb(0,122,255)',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 20, 
    fontWeight: 'bold'
  }
});
