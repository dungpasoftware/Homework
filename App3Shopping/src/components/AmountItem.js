import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { primaryColorGreen, primaryColorRed } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
class AmountItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            onGoingHistory: 0
        }
    }
    componentWillMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child('history')
            .on('value', res => this.setState({
                onGoingHistory: res._value != null ? res._value.filter(order => order.onGoing == true).length : 0

            }))

    }
    render() {

        return (
            <View>
                <Icon name={this.props.iconName} size={25} color={this.props.tintColor} />
                {this.props.routeName === 'Order' && this.props.orders.length != 0 &&
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
                {this.props.routeName === 'History' && this.state.onGoingHistory != 0 &&
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
                            {this.state.onGoingHistory}
                        </Text>
                    </View>}
            </View>
        )
    }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(AmountItem)
