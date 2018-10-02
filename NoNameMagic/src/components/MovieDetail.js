import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'



class MovieDetail extends Component {
    render() {
        return (

            <View style={{ backgroundColor: 'gray' }}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image
                        style={{ width: 160, height: 240, borderRadius: 10, marginLeft: 5, flex: 1 }}
                        source={{ uri: `https://image.tmdb.org/t/p/w200_and_h300_bestv2${this.props.movieSelected.poster_path}` }}
                    />
                    <View style={{ flex: 2, flexDirection: 'column', marginLeft: 10 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: 'bold', color: 'black', flexWrap: 'wrap',
                        }}> {this.props.movieSelected.title}</Text>
                        <Text style={[styles.text, { marginTop: 35 }]}>{`Vote average: ${this.props.movieSelected.vote_average}`}</Text>
                        <Text style={styles.text}>{`Vote count: ${this.props.movieSelected.vote_count}`}</Text>
                        <Text style={styles.text}>{`Popularity: ${this.props.movieSelected.popularity}`} </Text>
                        <Text style={{ color: 'yellow', marginVertical: 10 }}>{`Release date: ${this.props.movieSelected.release_date}`}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 23, color: 'red', fontWeight: 'bold', }}>-Overview: </Text>
                    <Text style={{ fontSize: 17, color: 'black', flexWrap: 'wrap', padding: 15 }}
                    >
                        {this.props.movieSelected.overview}
                    </Text>
                </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        marginVertical: 10,
        fontSize: 15
    }
})
const mapStateToProps = ({ movieSelected }) => ({ movieSelected })
export default connect(mapStateToProps)(MovieDetail)