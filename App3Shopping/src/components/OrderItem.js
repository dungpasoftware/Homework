import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { delOrder } from '../actions'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'
import { primaryColorGreen, primaryColorBrown } from '../styles'

class OrderItem extends Component {
    render() {
        return (
            <View style={styles.container}>

                {this.props.historyMode === false
                    && <TouchableOpacity
                        onPress={() => this.props.delOrder(this.props.item.name)}
                    >
                        <Icon
                            style={{ marginHorizontal: 4 }}
                            name='trash'
                            size={25}
                            color={primaryColorGreen} />
                    </TouchableOpacity>}



                <Text
                    style={styles.amount}
                > {this.props.item.amount}</Text>
                <Text
                    style={styles.name}
                >
                    {this.props.item.name}
                </Text>
                <Text
                    style={styles.price}
                > {`${this.props.item.unitPrice * this.props.item.amount}$`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 3
    },
    amount: {
        fontWeight: 'bold',
        color: primaryColorBrown,
        marginHorizontal: 16,
        fontSize: 18
    },
    name: {
        flex: 1,
        color: primaryColorBrown,
        marginHorizontal: 8
    },
    price: {
        fontWeight: 'bold',
        color: primaryColorGreen,
        marginHorizontal: 7,
        fontSize: 18
    }
})
export default connect(null, { delOrder })(OrderItem)