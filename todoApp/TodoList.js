import React, {Component} from 'react'
import {View} from 'react-native'
import Todo from './Todo'

// 예제 3.15, 3.20, 3.26
const TodoList = ({todos, deleteTodo, toggleComplete, type}) => {
	const getVisibleTodos = (todos, type) => {
		switch (type) {
      case 'All':
        return todos
      case 'Complete':
        return todos.filter((t) => t.complete)
      case 'Active':
        return todos.filter((t) => !t.complete)
		}
	}
  todos = getVisibleTodos(todos, type)
  todos = todos.map((todo, i) => {
    return (
	    <Todo 
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
		    todo={todo} />
		)
  })
	return (
		<View>
			{todos}
		</View>
	)
}

export default TodoList;