import React from 'react'
import {View, Text} from 'react-native'
import DataTest from './DataTest'

class Midterm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '전소진',
      id: 201930231,
      foo: [1,2,3,4,5]
    }
  }
  
  render() {
    return (
      <View>
        <Text>{this.state.id}</Text>
        <Text>{this.state.name}</Text>
        <DataTest array={this.state.foo}></DataTest>
      </View>
    )
  }
}
  
export default Midterm;