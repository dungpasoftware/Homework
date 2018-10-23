import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import FBSDK, { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'
export default class LoginWithFacebook extends Component {
    fbAuth = () => {
        console.log('an lon roi')
        LoginManager.logInWithReadPermissions(['public_profile'])
            .then((result) => {
                if (result.isCancelled) {
                    console.log("Login was cancelled")
                } else {
                    console.log('Login was a success' + result.grantedPermissions.toString)
                }
            })
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Button
                    title='Banh mi'
                    onPress={this.fbAuth}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

