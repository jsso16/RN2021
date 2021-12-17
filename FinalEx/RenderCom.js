import React from 'react'
import {View, Text} from 'react-native'
import {styles} from './Styles' 

const RenderCom = (props) => {
  let {id} = props
  let {name} = props
  let {foo} = props

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
      {foo}
      {'\n'}
      {'=============='}
      {'\n'}
      학번: {id}
      {'\n'}
      이름: {name}
      </Text>
    </View>
  ) 
}

export default RenderCom;