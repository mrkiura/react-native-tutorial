import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just big blue</Text>
        <Text style={[styles.bigBlue, styles.red]}>big blue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then big blue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
})

export default LotsOfStyles;
