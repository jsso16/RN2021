// 예제 4.7 - 프로필 카드 배경 설정하기
import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} 
              source={require('./user.png')} />
          </View>
        </View>
      </View>
    )
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
    // 예제 4.14 - 프로필 카드 레이아웃 수정하기
    alignItems: 'center',
    // 예제 4.10 - 프로필 카드 border 속성 적용하기
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profilecardColor,
    width: 300,
    height: 400
  },
  // 예제 4.10 - 프로필 카드 이미지 적용하기
  cardImageContainer: {  
    alignItems: 'center',     
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    // 예제 4.14 - 프로필 카드 레이아웃 수정하기
    marginTop: 30,
    paddingTop: 15
  }, 
  cardImage: {        
    width: 80,
    height: 80
  } 
});

export default App