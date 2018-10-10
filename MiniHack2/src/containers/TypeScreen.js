import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { fillData } from '../actions'
import { connect } from 'react-redux'
import data from '../data.json'

class TypeScreen extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => {
                        this.props.navigation.navigate("ConvertScreen")
                        this.props.fillData(data.lenght)
                    }}
                >
                    <Text>Lenght</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'orange' }}
                    onPress={() => {
                        this.props.navigation.navigate("ConvertScreen")
                        this.props.fillData(data.weight)
                    }}
                >
                    <Text>Weight</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
export default connect(null, { fillData })(TypeScreen)