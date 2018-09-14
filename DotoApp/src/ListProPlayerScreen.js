import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import ProPlayer from './ProPlayer';


export default class ListProPlayerScreen extends Component {
    state = {
        listProPlayer: [],
        loading: true
    }
    renderItem = ({ item }) => <ProPlayer proPlayer={item} navigation={this.props.navigation} />
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('https://api.opendota.com/api/proPlayers')
            .then((response) => {
                this.setState({ listProPlayer: response.data, loading: false })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        return (

            <View style={{ backgroundColor: 'pink', flex: 1 }}>
                {this.state.loading ? <ActivityIndicator />
                    : <FlatList
                        data={this.state.listProPlayer}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.account_id.toString()}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({})
