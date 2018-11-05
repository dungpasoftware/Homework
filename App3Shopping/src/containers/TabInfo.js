import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { commonStyles } from '../styles'
import InfoItem from '../components/InfoItem';
import firebase from 'react-native-firebase'

export default class TabInfo extends Component {

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.sceenTitle}>Tab TabInfo</Text>
                <InfoItem type={'address'} iconName={'location-arrow'} />
                <InfoItem type={'displayName'} iconName={'user'} />
                <InfoItem type={'phoneNumber'} iconName={'phone'} />
                <TouchableOpacity
                    style={commonStyles.button}
                    onPress={() => firebase.auth().signOut()}
                >
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Logout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({})
