/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// 예제 2.1, 2.2
class MyComponent extends Component {
  constructor() {
    super()
    this.state = {
      year: 2021,
      name: 'Jeon Sojin',
      colors: ['skyblue']
    }
  } 
     
  render() {
    return (
      <View>
        <Text>My name is: {this.state.name}</Text>
        <Text>The year is: {this.state.year}</Text>
        <Text>My colors are {this.state.colors[0]}</Text>
      </View>
    )
  }
}

export default MyComponent;


// 예제 2.5
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      year: 2016,
      name: 'React Native',
      colors: ['blue'],
      leapyear: true,
      topics: ['React', 'React Native', 'Javascript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming'
      }
    }
  }

  updateYear() {
    this.setState({
      year: 2021
    })
  }

  render() {
    let leapyear = <Text>This is not a leapyear!</Text>
    if (this.state.leapyear) {
      leapyear = <Text>This is a leapyear!</Text>
    }
    return (
      <View>
        <Text>My name is {this.state.name}</Text>
        <Text onPress={() => this.updateYear()}>
          My year is {this.state.year}
        </Text>
        <Text>My colors are {this.state.colors[0]}</Text>
        <Text>Topics: {this.state.topics[2]}</Text>
        <Text>Length: {this.state.info.length}</Text>
        <Text>Type: {this.state.info.type}</Text>
        {leapyear}
      </View>
    )
  }
}

export default App;