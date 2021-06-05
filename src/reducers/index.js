// 예제 8.3 - 모든 reducer를 포함하는 root reducer 만들기
import {combineReducers} from 'redux'    
import bookReducer from './bookReducer'    

const rootReducer = combineReducers({    
  bookReducer
})

export default rootReducer