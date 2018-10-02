import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { chooseMovie } from '../actions'

class ItemMovie extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.chooseMovie(this.props.movie)
                    this.props.navigation.navigate('MovieDetail')
                }}
            >
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
                        source={{ uri: `https://image.tmdb.org/t/p/w200_and_h300_bestv2${this.props.movie.poster_path}` }}
                    />
                    <View style={{ marginLeft: 15, flex: 1 }}>
                        <Text style={{
                            fontSize: 16, fontWeight: 'bold', color: 'black', flexWrap: 'wrap'
                            // --------- Ten Phim --------------------
                        }}>{this.props.movie.original_title}</Text>
                        <Text>{`VA: ${this.props.movie.vote_average} / VC : ${this.props.movie.vote_count}`}</Text>
                        <Text style={{ color: 'yellow' }}>{`RD: ${this.props.movie.release_date}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
})
export default connect(null, { chooseMovie })(ItemMovie)