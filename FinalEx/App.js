import React, {Component} from 'react'
import RenderCom from './RenderCom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 201930231,
      name: '전소진'
    }
  }
  
  render() {
    const {id, name} = this.state
    return (
      <RenderCom
        id={id}
        name={name}
        foo={"기말평가"}
      />
    )
  }
}

export default App