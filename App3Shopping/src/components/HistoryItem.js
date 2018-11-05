import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import Icon from 'react-native-vector-icons/FontAwesome'
import Accordion from 'react-native-collapsible/Accordion'
import { } from 'react-native-elements';
import { primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'


export default class HistoryItem extends Component {
    constructor(props) {
        super(props)

        this.state = {

            activeSections: []
        }
    }
    renderHeader = section => {
        const totalPrice = section.orders.reduce((acc, curV) => {
            return acc + curV.unitPrice * curV.amount
        }, 0)
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                    style={{
                        flex: 1,
                        color: primaryColorBrown,
                        fontSize: 16,
                        marginHorizontal: 7,
                        marginVertical: 7
                    }}
                >{section.date}</Text>
                <Text
                    style={{

                        color: primaryColorRed,
                        fontSize: 16,
                        marginHorizontal: 7,
                        marginVertical: 7,
                        fontWeight: 'bold'
                    }}
                >{`${totalPrice}$`}</Text>
                <Icon
                    style={{ marginEnd: 7 }}
                    name='angle-down'
                    size={20}
                    color={primaryColorBrown}
                />
            </View>

        );
    };


    renderContent = section => {
        return (

            <FlatList
                style={{ flexGrow: 0 }}
                data={section.orders}
                renderItem={({ item }) => <OrderItem item={item} historyMode={true} />}
                keyExtractor={item => item.name}


            />

        );
    };
    render() {


        return (
            <View>
                <Text
                    style={styles.title}
                >
                    {this.props.title}
                </Text>
                <Accordion
                    underlayColor={'white'}
                    activeSections={this.state.activeSections}
                    sections={this.props.data}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: primaryColorGreen,
        marginVertical: 7,
        marginHorizontal: 7,
        fontWeight: 'bold'
    }
})
