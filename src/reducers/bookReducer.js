// 예제 8.8 - bookReducer에 두 번째 인수로 addBook action 추가하기
import {ADD_BOOK, REMOVE_BOOK} from '../actions'  
// 예제 8.12 - 사용하는 uuid import하기
import uuidV4 from 'uuid/v4'

// 예제 8.2 - reducer 초기 상태 만들기
const initialState = {    
  books: [{name: 'East of Eden', author: 'John Steinbeck', id: uuidV4()}]    
}

const bookReducer = (state = initialState, action) => {    
  switch(action.type) {    
    case ADD_BOOK:
      return {
        books: [    
          ...state.books,
          action.book
        ]
      }

    // 예제 8.14 - Redux reducer의 배열에서 항목 제거하기
    case REMOVE_BOOK:    
      const index = state.books.findIndex(
                      book => book.id === action.book.id)    
      return {
        books: [    
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1)
        ]
      }

    default:    
      return state
  }
}

export default bookReducer