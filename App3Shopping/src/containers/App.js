import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'react-native-firebase'
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';
import { primaryColorGreen, primaryColorRed } from '../styles';
import AmountItem from '../components/AmountItem';


const BottomTabNavigatior = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo
},

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else if (routeName === 'Info') {
          iconName = `info-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <AmountItem iconName={iconName} tintColor={tintColor} routeName={routeName} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    },
  }
)


const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: BottomTabNavigatior
})

const store = createStore(rootReducer)
class App extends Component {


  state = {}
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigation />
      </Provider>
    );
  }
}

export default App;