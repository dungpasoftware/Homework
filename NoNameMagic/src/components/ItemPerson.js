import React, { Component } from 'react'
import { Text, StyleSheet, View, Picker, Dimensions, Image } from 'react-native'

import { connect } from 'react-redux'

import { chooseMovie } from '../actions'
class ItemPerson extends Component {
    constructor(props) {
        super(props)

        this.state = {
            language: ''
        }
    }

    render() {
        let data = this.props.person.known_for
        return (

            <View style={{
                flexDirection: 'row',
                width: Dimensions.get('window').width - 30,
                borderRadius: 10,
                height: 130,
                backgroundColor: 'gray',
                alignItems: 'center',
                marginHorizontal: 15,
                marginVertical: 5
            }}>
                <Image
                    style={{ width: 80, height: 120, borderRadius: 10, marginLeft: 5 }}
                    source={{ uri: this.props.person.profile_path != null ? `https://image.tmdb.org/t/p/w200_and_h300_bestv2${this.props.person.profile_path}` : `http://file.vforum.vn/hinh/2014/4/hoi-cham-145.jpg` }}
                />
                <View style={{ marginLeft: 15, flex: 1 }}>
                    <Text style={{
                        fontSize: 16, fontWeight: 'bold', color: 'black', flexWrap: 'wrap'
                    }}>{this.props.person.name}</Text>
                    <Text style={styles.text}>{`Gender: ${this.props.person.gender === 2 ? 'male' : 'female'}`}</Text>
                    <Text style={styles.text}>{`Popularity: ${this.props.person.popularity}`}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, color: 'black' }}>Movies :</Text>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.props.chooseMovie(itemValue)
                                this.props.navigation.navigate('MovieDetail')
                            }}>
                            {data.map(item => <Picker.Item label={item.original_title !== undefined ? item.original_title : item.original_name} value={item} key={item.id} />)}
                        </Picker>

                    </View>
                </View>
            </View >

        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        marginVertical: 1
    }
})
export default connect(null, { chooseMovie })(ItemPerson)