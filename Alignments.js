import React, { Component } from 'react';
import { View } from 'react-native';

class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    )
  }
}

export default AlignItemsBasics;
