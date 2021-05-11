// 예제 4.7 - 프로필 카드 배경 설정하기
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer} />
      </View>
    );
  }
}

const profilecardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    backgroundColor: profilecardColor,
    width: 300,
    height: 400
  }
});