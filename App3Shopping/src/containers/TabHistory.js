import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { primaryColorGreen, commonStyles, primaryColorBrown, primaryColorRed } from '../styles'

import { } from 'react-native-elements';

import firebase from 'react-native-firebase'
import HistoryItem from '../components/HistoryItem';
export default class TabHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {

            onGoingHistory: [],
            finishedHistory: []
        }

    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child('history')
            .on('value', res => this.setState({
                onGoingHistory: res._value.filter(order => order.onGoing == true),
                finishedHistory: res._value.filter(order => order.onGoing == false)
            }))

    }







    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.sceenTitle}> TabHistory </Text>
                <HistoryItem title='On-going' data={this.state.onGoingHistory} />
                <HistoryItem title='Finished' data={this.state.finishedHistory} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
