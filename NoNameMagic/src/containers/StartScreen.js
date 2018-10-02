import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import RoundCheckbox from 'rn-round-checkbox'
import { connect } from 'react-redux'
import axios from 'axios'

import { listData } from '../actions'





class StartScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isDay: true,
            loading: false
        }
    }
    takeData = (type) => {
        this.setState({ loading: true })
        axios.get(`https://api.themoviedb.org/3/trending/${type}/${this.state.isDay ? 'day' : 'week'}?api_key=2587d7e281f5152e3354556f479702d2`)
            .then((response) => {
                this.props.listData({
                    type: type,
                    data: response.data.results
                })
                this.setState({ loading: false })
                this.props.navigation.navigate('ListScreen')
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Text style={{ fontSize: 18 }}>You wanna list by: </Text>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
                        <RoundCheckbox
                            style={{ flex: 1 }}
                            size={24}
                            onValueChange={(newValue) => {
                                this.setState({ isDay: !this.state.isDay })

                            }}
                            checked={this.state.isDay}
                            backgroundColor='blue'
                        />
                        <Text>  Day</Text>
                    </View>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
                        <RoundCheckbox
                            style={{ flex: 1 }}
                            size={24}
                            onValueChange={(newValue) => {
                                this.setState({ isDay: !this.state.isDay })

                            }}
                            checked={!this.state.isDay}
                            backgroundColor='blue'
                        />
                        <Text>  Week</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'blue', height: 50, width: Dimensions.get('window').width - 100, borderRadius: 20, justifyContent: 'center', marginVertical: 20 }}
                    onPress={() => {
                        this.takeData('person')
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 25 }}>List Person</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'green', height: 50, width: Dimensions.get('window').width - 100, borderRadius: 20, justifyContent: 'center', marginVertical: 20 }}
                    onPress={() => {
                        this.takeData('movie')
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 25 }}>List Movie</Text>
                </TouchableOpacity>
                {this.state.loading ? <ActivityIndicator />
                    : <Text>Done</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({})
export default connect(null, { listData })(StartScreen)