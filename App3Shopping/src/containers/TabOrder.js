import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import OrderItem from '../components/OrderItem';
import { connect } from 'react-redux'
import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'




class TabOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    renderTitle = () => (
        <Text style={commonStyles.sceenTitle}>Order</Text>
    )
    renderOrders = () => (
        <FlatList
            style={{ flexGrow: 0 }}
            data={this.props.orders}
            renderItem={({ item }) => <OrderItem item={item} />}
            keyExtractor={item => item.name}
        />
    )



    renderTotal = () => (
        <View>
            <View
                style={{
                    marginTop: 10,
                    borderTopColor: primaryColorBrown,
                    borderTopWidth: 1,
                    marginHorizontal: 7
                }}
            ></View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[commonStyles.sceenTitle, { flex: 1 }]}>
                    Total
                </Text>
                <Text style={[commonStyles.sceenTitle]}>
                    {`${this.props.orders.reduce((total, order, index, orders) => {
                        return total += (order.amount * order.unitPrice)
                    }, 0)}$`}
                </Text>
            </View>
        </View>
    )
    renderConfirm = () =>
        <TouchableOpacity style={[commonStyles.button, { alignSelf: "center", bottom: 16, position: 'absolute' }]}
            onPress={this.confirmOrder}
        >
            <Text style={{ color: 'white' }}>Confirm</Text>
        </TouchableOpacity>

    confirmOrder = () => {

    }
    render() {

        return (
            <View style={commonStyles.screenContainer}>
                {this.renderTitle()}
                {this.renderOrders()}
                {this.renderTotal()}
                {this.renderConfirm()}
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(TabOrder)