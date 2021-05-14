// 예제 4.4 - 외부 스타일시트 가져오기
import React, {Component} from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {styles, buttons} from './styles'

export default class App extends Component {
  render() {
    return (
      // styles.js 파일에 정의된 styles.container 스타일 참조
      <View style={styles.container}>
        <TouchableHighlight style={buttons.primary}>
          <Text>Sample Text</Text>
        </TouchableHighlight>
      </View>
    )
  }
}