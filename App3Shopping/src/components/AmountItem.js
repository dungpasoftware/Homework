import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { primaryColorGreen, primaryColorRed } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'
class AmountItem extends Component {

    render() {

        return (
            <View>
                <Icon name={this.props.iconName} size={25} color={this.props.tintColor} />
                {this.props.routeName === 'Order' && this.props.orders.reduce((total, order, index, orders) => { return total += order.amount }, 0) != 0 &&
                    <View style={{
                        position: 'absolute',
                        backgroundColor: primaryColorRed,
                        borderRadius: 10,
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: 15
                    }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>
                            {this.props.orders.reduce((total, order, index, orders) => { return total += order.amount }, 0)}
                        </Text>
                    </View>}
            </View>
        )
    }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(AmountItem)
