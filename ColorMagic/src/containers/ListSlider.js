import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'



import SliderColor from '../components/SliderColor'
import ViewColor from '../components/ViewColor';

import { connect } from 'react-redux'

class ListSlider extends Component {
  renderItem = ({ item }) => (
    <SliderColor color={item} />
)
  render() {
    return (
      <View>
        <ViewColor/>
        <FlatList
            data ={this.props.currentColor}
            renderItem = {this.renderItem}
            keyExtractor={(item) => item.color}
            showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
const mapStateToProps = ({currentColor}) => ({currentColor}) 
export default connect(mapStateToProps)(ListSlider)