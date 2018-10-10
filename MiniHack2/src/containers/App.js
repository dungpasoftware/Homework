/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Itemconvert from '../components/Itemconvert';
import FirstScreen from '../components/FirstScreen';
import { createStackNavigator } from 'react-navigation'
import TypeScreen from './TypeScreen';

const Navigation = createStackNavigator({
  ConvertScreen: {
    screen: FirstScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Convertable",
      headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate("TypeConvert")}
        >
          <Text>type</Text>
        </TouchableOpacity>
    })
  },
  TypeConvert: {
    screen: TypeScreen
  }


});
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
