/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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


// 예제 2.16
class MainComponent extends Component {
  constructor() {
    super()
    this.state = {loading: true, data: {}}
  }

  componentDidMount() {
    // #simulate ajax call
    setTimeout(() => {
      this.setState({
        loading: false,
        data: {name: 'Nader Dabit', age: 35}
      })
    }, 2000)
  }
  
  render() {
    if (this.state.loading) {
      return <Text>Loading</Text>
    }
    const {name, age} = this.state.data
    return(
      <View >
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    )
  }
}
 
export default MainComponent;