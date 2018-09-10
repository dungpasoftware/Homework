import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'


import { data } from './database.json'
import CakeTouch from './CakeTouch';

export default class ListCake extends Component {

    renderItem = ({ item }) => <CakeTouch cake={item} navigation={this.props.navigation} />

    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.type}
            />
        )
    }
}

const styles = StyleSheet.create({})
