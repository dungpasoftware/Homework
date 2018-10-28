import React, { Component } from 'react'

import { connect } from 'react-redux'



import { addOrder } from '../actions'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { primaryColorBrown, primaryColorRed, commonStyles } from '../styles'

class MenuItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.item.image }}
                />
                <Text style={styles.name} numberOfLines={1}>{this.props.item.name}</Text>
                <Text style={styles.price}>{`${this.props.item.price}$`}</Text>
                <TouchableOpacity style={commonStyles.button}
                    onPress={() => this.props.addOrder({
                        name: this.props.item.name,
                        unitPrice: this.props.item.price
                    })}
                >
                    <Text style={{ color: 'white' }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        padding: 5,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    name: {
        marginTop: 5,
        color: primaryColorBrown,

    },
    price: {
        marginTop: 5,
        color: primaryColorBrown,
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default connect(null, { addOrder })(MenuItem);