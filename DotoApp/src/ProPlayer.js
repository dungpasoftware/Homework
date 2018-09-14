import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'

export default class ProPlayer extends Component {

    render() {
        return (

            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Profile', {
                        player: this.props.proPlayer
                    })
                }}
            >

                <View style={styles.overview}>
                    <Image
                        style={{ width: 100, height: 100, margin: 10 }}
                        source={{ uri: this.props.proPlayer.avatarmedium }}
                    />
                    <View style={{ flexDirection: 'column', height: 120, marginTop: 20 }}>
                        <Text style={[styles.text, { fontSize: 20 }]}>Account ID: {this.props.proPlayer.account_id}</Text>
                        <Text style={[styles.text, { fontSize: 17 }]}>Name: {this.props.proPlayer.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>


        )
    }
}

const styles = StyleSheet.create({
    overview: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 20,
        height: 120,
        backgroundColor: 'yellow',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10

    },
    text: {

        fontWeight: 'bold',
        margin: 10
    }
})

