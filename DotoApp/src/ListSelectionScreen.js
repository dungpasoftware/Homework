import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

import { data } from '../data/data.json'
import TouchSelection from './TouchSelection';

export default class ListSelectionScreen extends Component {
    renderItem = ({ item }) => <TouchSelection selector={item} navigation={this.props.navigation} />

    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.text}
            />
        )
    }
}

const styles = StyleSheet.create({})
