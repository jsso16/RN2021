import React from 'react'
import {View, Text} from 'react-native'

// Midterm으로부터 전달받은 props를 구조분해할당한다.
const DataTest = (props) => {
  let {id} = props
  let {name} = props
  let {foo} = props
    foo = foo.map((foo, i) => {
    return (
      // key는 React에서 컴포넌트를 렌더링할 떄 어떤 원소가 변경되었는지 빠르게 감지하기 위해 사용된다.
	    <Text key={i}>
        {foo}
      </Text>
	  )
  })

  return (
    // 구조 분해 할당된 변수를 이용하여 View를 구성하고, 구성된 View를 호출한 컴포넌트로 리턴해준다.
    <View>
      <Text>
      학번: {id}
      {'\n'}
      이름: {name}
      </Text>
      {foo}
    </View>
  ) 
}

export default DataTest;