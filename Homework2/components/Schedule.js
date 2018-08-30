import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import dataObject from '../data/dataObject'
import ScheduleComponent from './ScheduleComponent'




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