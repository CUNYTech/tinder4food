import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, SafeAreaView } from 'react-navigation';
import { CardStackStyleInterpolator } from 'react-navigation//src/views/CardStack/CardStackStyleInterpolator';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import DrawerItems from './src/Pages/DrawerItems';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import MainPage from './src/Pages/MainPage';
import AddGroup from './src/Pages/AddGroup';

const { width, height } = Dimensions.get('window');

export default class App extends Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DrawerLeft = DrawerNavigator({
  Profile: { screen: MainPage }
},

{
  initialRouteName: 'Profile',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRouts: 'DrawerOpen',
  drawerCloseRouts: 'DrawerClose',
  drawerToggleRouts: 'DrawerToggle',
  drawerWidth: 300,
});

const fromToptoBottom = (index, position) => {
  const inputRange = [0, index, index + 0.80, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 1]
  });
  const translateY = position.interpolate({
    inputRange,
    outputRange: [height, 0, 0, 0]
  });

  return {
    opacity,
    transform: [{ translateY }]
  };
};

const tranConfig = () => ({
    screenInterpolator: (sceneProps) => {
      const { position, scene } = sceneProps;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';

      return {
        default: CardStackStyleInterpolator.forHorizontal(sceneProps),
        fromToptoBottom: fromToptoBottom(index, position)
      }[transition];
    }
  });

const screens = {

  LoginPage: { screen: Login },

  RegisterPage: { screen: Register },

  MainPage: { screen: DrawerLeft,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },

  AddGroupPage: { screen: AddGroup }
};

const AppNavigator = StackNavigator(screens,
  {
    transitionConfig: tranConfig
  }
);

//export default AppNavigator;
