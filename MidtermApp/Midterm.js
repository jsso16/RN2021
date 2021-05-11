import React, {component} from 'react'
import DataTest from './DataTest'

class Midterm extends React {
  constructor() {
    super()
    this.state = {
      id: 201930231,
      name: '전소진'
    }
  }
  
  render() {
    const {id, name} = this.state  // 구조 분해 할당
    return (
      // DataTest.js로 전달한다.
      <DataTest
        id={id}
        name={name}
        foo={[1, 2, 3, 4, 5]}
      />
    )
  }
}
  
export default Midterm;