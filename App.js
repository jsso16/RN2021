// 예제 8.4 - Provider 컴포넌트와 store 객체 추가하기
import React from 'react'
import Books from './src/Books'    
import rootReducer from './src/reducers' 

import {Provider} from 'react-redux'    
import {createStore} from 'redux'    

const store = createStore(rootReducer)    

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Books />
      </Provider>
    )
  }
}

export default App