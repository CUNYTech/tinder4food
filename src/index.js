import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator, SafeAreaView, } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

//All the Screens
import DrawerItems from './Pages/DrawerItems';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainPage from './Pages/MainPage';
import AddGroup from './Pages/AddGroup';
import Profile from './Pages/Profile';

const { height } = Dimensions.get('window');

export const fromBottomtoTop = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1],
  });

  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0]
  });

  return { opacity, transform: [{ translateY }] };
};

const transConfig = () => ({
  screenInterpolator: (sceneProps) => {
    const { position, scene } = sceneProps;
    const { index, route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'default';

    return {
      default: CardStackStyleInterpolator.forHorizontal(sceneProps),
      fromBottomtoTop: fromBottomtoTop(index, position),
    }[transition];
  }
});

const CustomDrawerContentComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
);

const GroupDrawer = DrawerNavigator(
  {
    Profile: { screen: MainPage }
  },
  {
    initialRouteName: 'Profile',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRouts: 'DrawerOpen',
    drawerCloseRouts: 'DrawerClose',
    drawerToggleRouts: 'DrawerToggle',
    drawerWidth: 300,
  }
);

const scenes = {

  LoginPage: { screen: Login },

  RegisterPage: { screen: Register },

  AddGroupPage: { screen: AddGroup },

  ProfilePage: { screen: Profile },

  MainPage: { screen: GroupDrawer,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
};

const AppNavigator = StackNavigator(scenes,
  { transitionConfig: transConfig }
);

export default AppNavigator;
