import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import axios from 'react-native-axios';
import ItemWeather from './ItemWeather';


export default class ListWeather extends Component {


    _renderItem = ({ item }) => <ItemWeather weather={item} />
    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
            />
        )
    }
}

const styles = StyleSheet.create({})
