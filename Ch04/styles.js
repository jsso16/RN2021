// 예제 4.3 - 컴포넌트의 스타일시트를 외부로 분리하기
import {StyleSheet} from 'react-native'

/* styles 상수에 스타일 생성 */
const styles = StyleSheet.create({    
  /* container 스타일을 생성하고 컴포넌트에서는 styles.container로 참조 */
  container: {    
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap'
  }
})

/* 두번째 스타일 생성 및 button 상수로 저장 */
const buttons = StyleSheet.create({    
  /* button 스타일을 생성하고 컴포넌트에서는 buttons.primary로 참조 */
  primary: {    
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

export {styles, buttons}  