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


// 예제 2.19
class MainComponent extends Component { 
  handleClick() {
     this._timeout = setTimeout(() => {
       this.openWidget();
     }, 2000);
   }

   componentWillUnmount() {
     clearTimeout(this._timeout); 
   }

   render() {
     return <SomeComponent 
              handleClick={() => this.handleClick()} />
   }
}

export default MainComponent;