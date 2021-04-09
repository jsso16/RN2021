import React, {Component} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import Heading from './Heading'  // 예제 3.6 - Line 50
import Input from './Input' // 예제 3.8 - Line 22 ~ 25, 51 ~ 53
import Button from './Button' // 예제 3.13 - Line 19, 54

// 예제 3.11
let todoIndex = 0;

// 예제 3.3, 3.4, 3.6
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue)
    this.setState({inputValue})
  }

  // 예제 3.10
  submitTodo () {    
    if (this.state.inputValue.match(/^\s*$/)) {    
      return    
    }    
    const todo = {    
      title: this.state.inputValue,    
      todoIndex,    
      complete: false    
    }    
    todoIndex++    
    const todos = [...this.state.todos, todo]    
    this.setState({ todos, inputValue: '' }, () => {    
      console.log('State: ', this.state)    
    }) 
  }

  render() {
    const {inputValue} = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;