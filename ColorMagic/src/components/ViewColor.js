import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

import {connect} from 'react-redux'


 class ViewColor extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column'}}>
                <View style={[styles.colorView, {
                    backgroundColor: `rgb(
                                    ${this.props.currentColor[0].number},
                                    ${this.props.currentColor[1].number},
                                    ${this.props.currentColor[2].number}
                                    )`
                }]}>

                </View>
                <Text style={styles.txt}>
                                     {`rgb(${this.props.currentColor[0].number}, ${this.props.currentColor[1].number}, ${this.props.currentColor[2].number} )`}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    colorView: {
        width: Dimensions.get('window').width,
        borderRadius: 10,
        height: 300
    },
    txt: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 20,
    }
})

const mapStateToProps = ({currentColor}) => ({currentColor}) 
export default connect(mapStateToProps)(ViewColor)