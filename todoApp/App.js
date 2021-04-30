import React, {Component} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import Heading from './Heading'  // 예제 3.6 - Line 50
import Input from './Input' // 예제 3.8 - Line 22 ~ 25, 51 ~ 53
import Button from './Button' // 예제 3.13 - Line 19, 54
import TodoList from './TodoList' // 예제 3.16 - Line 46, 79
import TabBar from './TabBar' // 예제 3.25 - Line 74, 90

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
    // 예제 3.17
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    // 예제 3.22
    this.setType = this.setType.bind(this)
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

  // 예제 3.17
  deleteTodo (todoIndex) {
    let {todos} = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({todos})
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({todos})
  }

  // 예제 3.22
  setType (type) {
    this.setState({type})
  }

  render() {
    const {inputValue, todos, type} = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList 
            // 예제 3.19, 3.25
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos} /> 
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
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