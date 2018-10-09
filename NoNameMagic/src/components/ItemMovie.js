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
                    width: Dimensions.get('window').width,

                    height: 200,
                    backgroundColor: '#172025',
                    alignItems: 'center',
                    marginVertical: 5
                }}>
                    <Image
                        style={{ width: 130, height: 200, marginLeft: 20 }}
                        source={{ uri: `https://image.tmdb.org/t/p/w200_and_h300_bestv2${this.props.movie.poster_path}` }}
                    />
                    <View style={{
                        paddingLeft: 15, flex: 1, backgroundColor: '#1E292D', borderRadius: 4,
                        borderWidth: 0.5,
                        borderColor: '#1E292F',
                        marginRight: 20, height: 150,
                        justifyContent: 'space-around'

                    }}>
                        <Text style={{
                            fontSize: 16, fontWeight: 'bold', color: 'white', flexWrap: 'wrap'
                            // --------- Ten Phim --------------------
                        }}>{this.props.movie.original_title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black' }}>{this.props.movie.vote_average}</Text>
                            </View>
                            <Text style={{ color: 'white', marginLeft: 20 }}>{`/    ${this.props.movie.vote_count} votes`}</Text>
                        </View>

                        <Text style={{ color: 'yellow' }}>{`RD: ${this.props.movie.release_date}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})
export default connect(null, { chooseMovie })(ItemMovie)