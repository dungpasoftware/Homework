/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import ItemWeather from './ItemWeather';
import ListWeather from './ListWeather';
import axios from 'react-native-axios';



export default class App extends Component {
  state = {
    data: []
  }

  componenDidMount() {

  }
  render() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542')
      .then(res => this.setState({ data: res.data.list }))
      .catch(err => console.log(err))
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, margin: 12 }}>
          <View style={{ flexDirection: 'row', flex: 0.5 }}>
            <TextInput style={{ flex: 8 }} placeholder="Nhap vao day"></TextInput>
            <Button
              style={{ flex: 2, color: 'black' }}
              title='Search'
              color='white'
            />
          </View>

          <View style={{ flexDirection: 'column', flex: 0.5, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Ha Noi</Text>
            <Text style={{ color: 'white' }}>20/07/2018</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                style={{
                  height: 120,
                  width: 120
                }}
                source={{ uri: 'https://lh3.googleusercontent.com/v1tLHbbVMXkZX-jCZ0o_Zp91PsPR4crcUeWXPQlo9kRj3ulWy4ZJQ3lDX-70fS_8ROvbGeZvHgsr158MaF11=w1366-h631' }}
              />
              <Text>aaa</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{
                color: 'white',
                fontSize: 80,
                fontWeight: 'bold'
              }}>24</Text>

              <View style={{ flexDirection: 'row' }}>
                <Button
                  style={{
                    flex: 1
                  }}
                  title='C'
                  color='#39354C'
                />
                <Button
                  style={{ flex: 1 }}
                  title='F'
                  color='#39354C'
                />
              </View>
            </View>

          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <ListWeather data={this.state.data} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#39354C',
    flexDirection: 'column'
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
