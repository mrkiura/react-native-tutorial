import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Banana from './Banana';
import ManyGreetings from './Greeting';
import BlinkApp from './Blink';
import LotsOfStyles from './Styles';
import FixedDimensionsBasics from './Dimensions';
import JustifyContentBasics from './FlexDirection';
import AlignItemsBasics from './Alignments';
import PizzaTranslator from './PizzaTranslator';
import ScrollingBasics from './Scrolling';
import ListViewBasics from './ListingStuff';
import MovieList from './MovieList';
import MyScene from './MyScene';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class HelloReact extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // function call to go back to previous Scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}


AppRegistry.registerComponent('HelloReact', () => HelloReact);
