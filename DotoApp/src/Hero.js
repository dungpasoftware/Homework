import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'

export default class Hero extends Component {
    render() {
        return (
            <View style={styles.overview}>
                <Image
                    style={{ width: 100, height: 100, margin: 10 }}
                    source={{ uri: 'https://orig00.deviantart.net/351e/f/2015/167/b/6/not_a_hero_game_icon_by_19sandman91-d8xl9yq.png' }}
                />
                <View style={{ flexDirection: 'column', height: 120, marginTop: 20 }}>
                    <Text style={[styles.text, { fontSize: 20 }]}>Name: {this.props.hero.localized_name}</Text>
                    <Text style={[styles.text, { fontSize: 17 }]}>Name: {this.props.hero.attack_type}</Text>

                </View>
            </View>
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
