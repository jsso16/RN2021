// 예제 4.7 - 프로필 카드 배경 설정하기
import React, {Component} from 'react'
import {Image, Platform, StyleSheet, Text, View} from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} 
              source={require('./user.png')} />
          </View>
          <View>
            <Text style={styles.cardName}>    
              Sojin Jeon
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>    
            <Text style={styles.cardOccupation}>    
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>    
              Sojin is a really great JavaScript developer. She
              loves using JS to build React Native applications
              for iOS and Android.
            </Text>
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
    height: 400,
    // 예제 5.1 - 프로필 카드에 그림자 추가하기
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
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
    paddingTop: 15,
    // 예제 5.1 - 프로필 카드에 그림자 추가하기
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
  }, 
  cardImage: {        
    width: 80,
    height: 80
  },
  // 예제 4.15 - 프로필 카드에 텍스트 추가하기
  // 예제 4.17 - 텍스트 요소에 폰트 스타일 설정하기
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    // 예제 4.20 - 프로필 카드 완성하기
    textShadowColor: 'black',
    textShadowOffset: {
      height: 2,
      width: 2
    },
    textShadowRadius: 3,
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter'
      },
      android: {
        fontFamily: 'monospace'
      }
    })
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  }, 
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
});

export default App