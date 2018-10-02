import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'



import ItemMovie from '../components/ItemMovie'
import ItemPerson from '../components/ItemPerson'



class ListAll extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.dataForList.data

        }
    }


    renderItem = ({ item }) => this.props.dataForList.type === 'movie' ? <ItemMovie movie={item} navigation={this.props.navigation} /> : <ItemPerson person={item} navigation={this.props.navigation} />

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item => item.id.toString())}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({})
const mapStateToProps = ({ dataForList }) => ({ dataForList })
export default connect(mapStateToProps)(ListAll)