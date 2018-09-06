import React, { Component } from 'react'
import { Text, View, Image, Dimensions, FlatList } from 'react-native'
import { data } from '../data/data.json'
import ScheduleComponent from './ScheduleComponent'

export default class Schedule extends Component {
    renderItem = ({ item }) => <ScheduleComponent schedule={item} />
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

                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                />


            </View>
        )
    }
}