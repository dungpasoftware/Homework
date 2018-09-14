import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'

export default class TouchSelection extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(this.props.selector.screen, {
                    selector: this.props.selector
                })}
            >
                <View style={styles.overview}>
                    <Image style={{ width: 100, height: 100 }}
                        source={{ uri: this.props.selector.uriImage, }}
                    />
                    <Text style={styles.text}>{this.props.selector.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    overview: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'pink',
        width: Dimensions.get('window').width - 20,
        height: 200,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    }
})
