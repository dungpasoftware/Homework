import React, { Component } from 'react';
import {
  Text, TextInput,
  View, Platform,
  Image, StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'react-native-firebase'

import { backgroundColor, primaryColorBrown, primaryColorGreen, primaryColorRed } from '../styles'

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    err: '',
    isSigningIn: false,
    isSigningUp: false
  }

  renderLogo = () => (
    <Image
      style={styles.logo}
      resizeMode='contain'
      source={require('../../imgs/logo_app.jpg')} />
  )

  renderEmailInput = () => (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.icon}
          resizeMode='contain'
          source={require('../../imgs/ic_email.png')} />
        <Text style={styles.textTitle}>Email</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(email) => this.setState({ email })}
        keyboardType={'email-address'}
        underlineColorAndroid={'rgba(0,0,0,0)'} />
    </View>
  )

  renderPasswordInput = () => (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.icon}
          resizeMode='contain'
          source={require('../../imgs/ic_password.png')} />
        <Text style={styles.textTitle}>Password</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(password) => this.setState({ password })}
        underlineColorAndroid={'rgba(0,0,0,0)'}
      />
    </View>
  )

  renderButtons = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Button
        title='Sign up'
        loading={this.state.isSigningUp}
        onPress={this.onSignUp}
        titleStyle={{ fontSize: 16 }}
        buttonStyle={{
          backgroundColor: primaryColorGreen,
          width: 100,
          height: 40,
          borderRadius: 30

        }}
        containerStyle={{ marginTop: 20, marginHorizontal: 5 }} />
      <Button
        title='Sign in'
        loading={this.state.isSigningIn}
        onPress={this.onSignIn}
        titleStyle={{ fontSize: 16 }}
        buttonStyle={{
          backgroundColor: primaryColorRed,
          width: 100,
          height: 40,
          borderRadius: 30
        }}
        containerStyle={{ marginTop: 20, marginHorizontal: 5 }} />
    </View>
  )

  renderError = () => (
    <Text style={styles.error}>{this.state.err}</Text>
  )
  onSignIn = () => {

    if (this.state.email === '') {
      this.setState({ err: 'Pls enter email' })
      return
    }
    if (this.state.password === '') {
      this.setState({ err: 'Pls enter password' })
      return
    }
    this.setState({ isSigningIn: true })
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({ err: '', isSigningIn: false })
      })
      .catch(err => this.setState({ err: err.toString(), isSigningIn: false }))
  }


  onSignUp = () => {

    if (this.state.email === '') {
      this.setState({ err: 'Pls enter email' })
      return
    }
    if (this.state.password === '') {
      this.setState({ err: 'Pls enter password' })
      return
    }
    this.setState({ isSigningUp: true })
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({ err: '', isSigningUp: false })
      })
      .catch(err => this.setState({ err: err.toString(), isSigningUp: false }))
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderLogo()}
        {this.renderEmailInput()}
        {this.renderPasswordInput()}
        {this.renderError()}
        {this.renderButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  },
  icon: {
    width: 16,
    height: 16
  },
  textTitle: {
    marginStart: 5,
    color: primaryColorBrown
  },
  input: {
    borderBottomWidth: 1,
    borderColor: primaryColorBrown,
    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    paddingHorizontal: 0,
  },
  error: {
    color: primaryColorRed,
    marginTop: 20
  }
})

export default LoginScreen;