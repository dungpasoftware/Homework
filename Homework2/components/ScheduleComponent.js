import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import NameAndImage from './NameAndImage'
var screen = Dimensions.get('window')
export default class ScheduleComponent extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: 'rgb(255, 250, 0)',
                    width: screen.width - 80,
                    height: 85,
                    marginTop: 15,
                    borderRadius: 10,
                    flexDirection: 'column'
                }}
            >
                <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }}> {this.props.time} </Text>

                <View style={{ flexDirection: 'row', marginTop: 10, flex: 1 }}>
                    <NameAndImage object={this.props.object1} direction='row'></NameAndImage>
                    <NameAndImage object={this.props.object2} direction='row-reverse'></NameAndImage>

                </View>

            </View>
        )
    }
}