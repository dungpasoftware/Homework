import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { backgroundColor, primaryColorBrown, primaryColorGreen, primaryColorRed, commonStyles } from '../styles'
import firebase from 'react-native-firebase'
import MenuItem from '../components/MenuItem';
export default class TabMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentCategory: 'Hamburger',
            dishes: []
        }
    }
    componentDidMount() {
        this.loadData()

    }

    loadData() {
        firebase.database().ref(`dishes/${this.state.currentCategory}`)
            .on('value', res =>

                this.setState({ dishes: res._value }, () => console.log(this.state.dishes))
            )

    }


    renderItemCategories = ({ item }) => (
        <TouchableOpacity
            onPress={() => {

                this.setState({ currentCategory: item }, () => this.loadData())
            }}
        >
            <Text
                style={[styles.categoryItem, { color: this.state.currentCategory === item ? primaryColorRed : primaryColorGreen }]}
            >{item}</Text>
        </TouchableOpacity>
    )


    renderCategories = () => (
        <FlatList
            style={{ flexGrow: 0 }}
            data={['Hamburger', 'Pizza', 'Spaghetti', 'Salad', 'Drink', 'Snack']}
            renderItem={this.renderItemCategories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
        />
    )
    renderMenu = () => (

        <FlatList

            data={this.state.dishes}
            renderItem={this.renderItemMenu}
            keyExtractor={(item) => item.key.toString()}
            numColumns={2}
        />

    )

    renderItemMenu = ({ item }) => {
        return (
            <MenuItem item={item}></MenuItem>
        )
    }



    render() {

        return (
            <View style={commonStyles.screenContainer}>
                {this.renderCategories()}
                {this.renderMenu()}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    categoryItem: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 7,
        marginVertical: 10
    }
})
