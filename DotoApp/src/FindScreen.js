import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Dimensions } from 'react-native'
import axios from 'axios'

export default class FindScreen extends Component {
    _onPress = () => {
        axios.get(`https://api.opendota.com/api/players/${this.state.textForFind}`)
            .then((response) => {
                this.props.navigation.navigate('Profile', {
                    player: response.data.profile
                })

            })
            .catch((error) => {
                console.log(error);
            })
    }
    state = {
        textForFind: "",
        player: null
    }
    render() {
        return (
            <View style={styles.overview}>
                <TextInput
                    placeholder="Enter your ID"
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ textForFind: text })}
                    value={this.state.textForFind}
                />
                <Button

                    title="Find Now"
                    color="#841584"
                    onPress={this._onPress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        width: Dimensions.get('window').width - 30,
        borderRadius: 3,
        marginBottom: 20
    },
    overview: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20

    }

})

