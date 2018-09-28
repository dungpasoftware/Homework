import React, { Component } from 'react'
import { Text, StyleSheet, View, Slider, Dimensions } from 'react-native'
import { changeColor } from '../actions'

import { connect } from 'react-redux'

class SliderColor extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    onValueChange = (val) => {
        this.props.changeColor({
            id: this.props.color.id,
            color: this.props.color.color,
            number: val
        })
    }

    render() {
        return (
            <View >
                <Text style={{ left: this.props.color.number +20, color: this.props.color.color }}>{this.props.color.number}</Text>
                <Slider
                    style={{ width: 300 }}
                    step={1}
                    thumbStyle={this.props.color.color}
                    minimumTrackTintColor={this.props.color.color}
                    thumbTintColor={this.props.color.color}
                    minimumValue={0}
                    maximumValue={255}
                    onValueChange={this.onValueChange}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
export default connect(null, { changeColor })(SliderColor);