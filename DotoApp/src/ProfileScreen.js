import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, Dimensions } from 'react-native'
import axios from 'axios'

const wl = null
export default class ProfileScreen extends Component {


    takeWL(player) {
        axios.get(`https://api.opendota.com/api/players/${player.account_id}/wl`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        const player = this.props.navigation.getParam('player')
        const widthDivice = Dimensions.get('window').width
        this.takeWL(player)
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: widthDivice - 20 }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: player.avatarmedium }}
                    />
                    <View style={{ flexDirection: 'column', marginLeft: 5, justifyContent: 'space-around', height: 100 }}>
                        <Text style={{ fontSize: 22, color: 'black' }}>Name: {player.name}</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>Personaname:  {player.personaname}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>Steam ID: {player.steamid}</Text>
                {/* <Text>Win: {wl.win}</Text>
                <Text>Lose: {wl.lose}</Text> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({})
