import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import CakeView from './CakeView';

export default class CakeDetailScreen extends Component {
    render() {
        const cakeData = this.props.navigation.getParam('cakeData');
        return (
            <View>
                <CakeView cake={cakeData} />
                <FlatList
                    style={styles.listCakeView}
                    data={cakeData.names}
                    renderItem={({ item }) => <Text style={{ color: cakeData.color, paddingTop: 3, paddingLeft: 10, fontWeight: 'bold', fontSize: 20 }}>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listCakeView: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,

    }

})