/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import ListCakeScreen from './ListCakeScreen'
import CakeDetailScreen from './CakeDetailScreen'

const Navigation = createStackNavigator({
  ListCake: {
    screen: ListCakeScreen,
    navigationOptions: () => {
      return {
        title: 'Cakes',
      };
    }
  },
  CakeDetail: {
    screen: CakeDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('cakeData').type,
      };
    }
  }

})


export default class App extends Component {
  render() {
    return (

      <Navigation />

    );
  }
}

