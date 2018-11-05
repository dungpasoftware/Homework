import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
import { primaryColorGreen, primaryColorBrown } from '../styles'
import { colors } from 'react-native-elements';

export default class InfoItem extends Component {
    state = {

    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .on('value', res => this.setState({
                info: res._value
            }))

    }

    onSubmit = (event) => {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .set(event.nativeEvent.text)
    }
    render() {

        return (
            <View style={styles.container}>
                <Icon name={this.props.iconName} size={25} color={primaryColorGreen} />
                <TextInput
                    style={{ flex: 1, color: primaryColorBrown, marginLeft: 16 }}
                    placeholder={'Enter tyour location'}
                    onSubmitEditing={this.onSubmit}
                    returnKeyType={'done'}
                    defaultValue={this.state.info}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 7,
        marginVertical: 5
    }
})
