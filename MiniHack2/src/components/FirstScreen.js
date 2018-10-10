import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList, Dimensions } from 'react-native'

import data from '../data.json'
import Itemconvert from './Itemconvert.js';
import { connect } from 'react-redux'

class FirstScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textLeft: 0,
            textRight: 0
        }
    }
    changeValue = () => {

    }

    renderItem1 = (item) => <Itemconvert object={item} type='left' />
    renderItem2 = (item) => <Itemconvert object={item} type='right' />
    render() {
        console.log(this.props.currentValue)


        var resutltR = parseInt(this.state.textRight) * this.props.currentValue.left / this.props.currentValue.right
        var resutltL = parseInt(this.state.textLeft) * this.props.currentValue.right / this.props.currentValue.left
        console.log(resutltR)

        return (
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TextInput
                        style={styles.txtInStyle}
                        onChangeText={(text) => this.setState({
                            textRight: parseInt(text)
                        })}

                        value={resutltL.toString()}
                    />
                    <FlatList
                        data={data.lenght}
                        renderItem={this.renderItem1}
                        keyExtractor={(item) => item.value}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.txtInStyle}
                        onChangeText={(text) => this.setState({ textLeft: parseInt(text) })}
                        value={resutltR.toString()}
                    />
                    <FlatList
                        data={data.lenght}
                        renderItem={this.renderItem2}
                        keyExtractor={(item) => item.value}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    txtInStyle: {
        width: Dimensions.get('window').width / 2,
        // marginStart: 20,
        alignItems: 'center',
        marginTop: 20
    }
})
const mapStateToPropts = ({ currentValue }) => ({ currentValue });
export default connect(mapStateToPropts)(FirstScreen);