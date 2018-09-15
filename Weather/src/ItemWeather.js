import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'

export default class ItemWeather extends Component {

    state = {
        uriImage: "https://lh3.googleusercontent.com/v1tLHbbVMXkZX-jCZ0o_Zp91PsPR4crcUeWXPQlo9kRj3ulWy4ZJQ3lDX-70fS_8ROvbGeZvHgsr158MaF11=w1366-h631"
    }

    render() {
        // switch (this.props.weather.weather.main) {
        //     case 'Clear':
        //         this.setState({ uriImage: "https://lh3.googleusercontent.com/v1tLHbbVMXkZX-jCZ0o_Zp91PsPR4crcUeWXPQlo9kRj3ulWy4ZJQ3lDX-70fS_8ROvbGeZvHgsr158MaF11=w1366-h631" })
        //         break;
        //     case 'Rain':
        //         this.setState({ uriImage: "https://lh5.googleusercontent.com/ClQn9tKEvo4FIhtVQnGT09sI6I3pBjj6NNOwbWKSyVjYrQf8MGeZEmdDDMOdVNTZ46wPhCAJWTW9c89AGjQT=w1366-h631" })
        //         break;
        //     case 'Clouds':
        //         this.setState({ uriImage: "https://lh5.googleusercontent.com/tGC1hw8IDn9EMgQ5ERyJDKdKwZ-vAESQeX03bhLem7zqWOmGCSpNYkI9leK5E6ns8dmnTlRrXWlAB4WSaLux=w1366-h631" })
        //         break;
        //     case 'Snow':
        //         this.setState({ uriImage: "https://lh4.googleusercontent.com/d7GqeAbqrCY8uTntu5UJQ1TIu1WNsSi4tCrZ9rHXSVITiqXSYWg--JhXG2IUPnI2L32GQJ39kc1VHSQ3gRn5=w1366-h631" })
        //         break;
        // }
        return (
            <View style={styles.container}>
                <Text style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: 13,
                    color: 'white',

                    fontSize: 20
                }}>
                    {new Date(this.props.weather.dt).toString()}
                </Text>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',

                }}>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: 20,
                        marginLeft: 80

                    }}>
                        {Math.floor(this.props.weather.temp.day) - 273}
                    </Text>

                    <Image
                        style={{

                            height: 35,
                            width: 35,
                            marginRight: 15
                        }}
                        source={{ uri: this.state.uriImage }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E2B3E',
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        height: 60,
        borderRadius: 8,
        marginTop: 10

    }
})
