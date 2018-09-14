/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'


import ListSelectionScreen from './ListSelectionScreen';
import FindScreen from './FindScreen';
import ProfileScreen from './ProfileScreen';
import ListProPlayerScreen from './ListProPlayerScreen';
import ListHeroScreen from './ListHeroScreen'


const Navigation = createStackNavigator({
  SelectorList: {
    screen: ListSelectionScreen,
    navigationOptions: () => {
      return {
        title: 'Doto App',
      };
    }
  },
  Find: {
    screen: FindScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('selector').text,
      };
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: `Account ID: ${navigation.getParam('player').account_id.toString()}`,
      };
    }
  },
  ProPlayerList: {
    screen: ListProPlayerScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Go Pro',
      };
    }
  },
  ListHero: {
    screen: ListHeroScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'List Hero',
      };
    }
  }
})
export default class App extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}


