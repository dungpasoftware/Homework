import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CakeView from './CakeView';

export default class CakeTouch extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CakeDetail', {
                        cakeData: this.props.cake
                    })}>

                    <CakeView cake={this.props.cake} />

                </TouchableOpacity>
            </View>
        )
    }
}