import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import Hero from './Hero';


export default class ListProPlayerScreen extends Component {
    state = {
        listHero: [],
        loading: true
    }
    renderItem = ({ item }) => <Hero hero={item} navigation={this.props.navigation} />
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('https://api.opendota.com/api/heroes')
            .then((response) => {
                this.setState({ listHero: response.data, loading: false })
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
                        data={this.state.listHero}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({})
