import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import dataObject from '../data/dataObject'

var screen = Dimensions.get('window')
class ScheduleComponent extends Component {

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
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.object1.name}</Text>
                        <Image style={{ width: 25, height: 25 }}
                            source={{ uri: this.props.object1.imageUrl }}></Image>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Image style={{ width: 25, height: 25 }}
                            source={{ uri: this.props.object2.imageUrl }}></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.object2.name}</Text>
                    </View>
                </View>

            </View>
        )
    }
}


export default class Schedule extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgb(0, 220, 0)' }}>
                <Text
                    style={{ fontWeight: 'bold', fontSize: 30, color: 'black', marginTop: 15 }}
                >Schedule</Text>


                <Image
                    style={{ width: 150, height: 150, marginTop: 10 }}
                    source={{ uri: 'https://vi.seaicons.com/wp-content/uploads/2016/08/Logos-Java-Coffee-Cup-Logo-Copyrighted-icon.png' }}
                ></Image>

                <Text
                    style={{ fontWeight: 'bold', fontSize: 20, color: 'yellow', marginTop: 10, marginBottom: 30 }}
                >Street Fighter V</Text>


                <ScheduleComponent object1={dataObject[0]} object2={dataObject[1]} time="Feb 31 2018 - 25:00" />
                <ScheduleComponent object1={dataObject[2]} object2={dataObject[3]} time="Feb 31 2018 - 25:00" />
                <ScheduleComponent object1={dataObject[4]} object2={dataObject[5]} time="Feb 31 2018 - 25:00" />
            </View>
        )
    }
}