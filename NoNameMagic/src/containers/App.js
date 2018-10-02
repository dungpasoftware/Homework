/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import ListAll from './ListAll';
import MovieDetail from '../components/MovieDetail';
import StartScreen from './StartScreen';

const Navigation = createStackNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions: () => {
      return {
        title: 'List',
      };
    }
  },
  ListScreen: {
    screen: ListAll,
    navigationOptions: () => {
      return {
        title: 'List',
      };
    }
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: () => {
      return {
        title: 'List',
      };
    }
  }

})
const store = createStore(rootReducer)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
