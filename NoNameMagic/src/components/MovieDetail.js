import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import StarRating from 'react-native-star-rating';
import { } from 'react-native-vector-icons'
import { Rating, AirbnbRating } from 'react-native-ratings';



class MovieDetail extends Component {
    render() {
        return (




            <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/w200_and_h300_bestv2${this.props.movieSelected.poster_path}` }}
                style={{ flex: 1, width: '100%', height: '100%' }}
                blurRadius={1}

            >
                <View
                    style={{
                        flex: 1,

                        backgroundColor: 'rgba(0, 0, 0, .8)'
                    }}

                >
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image
                            style={{ width: 160, height: 240, borderRadius: 10, marginLeft: 5, flex: 1 }}
                            source={{ uri: `https://image.tmdb.org/t/p/w200_and_h300_bestv2${this.props.movieSelected.poster_path}` }}
                        />
                        <View style={{ flex: 2, flexDirection: 'column', marginLeft: 10, justifyContent: 'space-around' }}>
                            <Text style={{
                                fontSize: 20, fontWeight: 'bold', color: 'white', flexWrap: 'wrap',
                            }}> {this.props.movieSelected.title}</Text>

                            <Rating
                                type='star'
                                startingValue={this.props.movieSelected.vote_average}
                                ratingCount={10}
                                imageSize={20}
                                ratingBackgroundColor='#172025'
                                ratingColor='#172025'

                            />

                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image
                                    style={{ height: 25, width: 25 }}
                                    source={{ uri: 'https://www.matsugov.us/images/icons/election/officials.png' }}
                                />
                                <Text style={styles.text}>{`  : ${this.props.movieSelected.vote_count} votes`} </Text>

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image
                                    style={{ height: 25, width: 25 }}
                                    source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_545308.png' }}
                                    tintColor={'white'}
                                />
                                <Text style={styles.text}>{`  : ${this.props.movieSelected.popularity}`} </Text>

                            </View>
                            <Text style={{ color: 'yellow', marginVertical: 10 }}>{`Release date: ${this.props.movieSelected.release_date}`}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold', }}>-Overview: </Text>
                        <Text style={{ fontSize: 17, color: 'white', flexWrap: 'wrap', padding: 15 }}
                        >
                            {this.props.movieSelected.overview}
                        </Text>
                    </View >
                </View>
            </ImageBackground>


        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        marginVertical: 10,
        fontSize: 15
    }
})
const mapStateToProps = ({ movieSelected }) => ({ movieSelected })
export default connect(mapStateToProps)(MovieDetail)