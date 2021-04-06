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


// 예제 2.17
class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name !== this.props.name) {
      return true
    }
    return false
  }
  
  render() {
    return <SomeComponent />
  }
}
  
export default App;
  
  
// 예제 2.18
class MainComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevState.showToggled === this.state.showToggled) {
         this.setState({
        showToggled: !showToggled
      })
    }
  }
    
  render() {
    return <SomeComponent />
  }
}
  
export default MainComponent;