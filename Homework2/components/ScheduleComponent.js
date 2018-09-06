import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
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
                <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }}> {this.props.schedule.time} </Text>

                <View style={{ flexDirection: 'row', marginTop: 10, flex: 1 }}>
                    <NameAndImage name={this.props.schedule.name[0]} avt={this.props.schedule.imageUrl[0]} direction='row'></NameAndImage>
                    <NameAndImage name={this.props.schedule.name[1]} avt={this.props.schedule.imageUrl[1]} direction='row-reverse'></NameAndImage>

                </View>

            </View>
        )
    }
}