import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'


import { data } from './database.json'
import CakeTouch from './CakeTouch';

export default class ListCake extends Component {

    renderItem = ({ item }) => <CakeTouch cake={item} navigation={this.props.navigation} />

    render() {
        return (
            <View style={{ backgroundColor: 'pink', flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.type}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
