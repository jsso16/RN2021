import React, {component} from 'react'
import {View, Text} from 'react-native'

const DataTest = ({array}) => {
    array = array.map((datatest, i) => {
    return (
	    <Text>
        {datatest}
      </Text>
	  )
  })

  return (
    <View>
      {array}
    </View>
  ) 
}

export default DataTest;