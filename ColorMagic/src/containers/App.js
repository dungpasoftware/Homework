/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
import ListSlider from './ListSlider';
import ViewColor from '../components/ViewColor';


const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <View>
          <ListSlider />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})

