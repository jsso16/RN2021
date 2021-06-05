// 예제 8.7 - 첫 번째 action 만들기
export const ADD_BOOK = 'ADD_BOOK'    
// 예제 8.13 - 두 번째 action 만들기
export const REMOVE_BOOK = 'REMOVE_BOOK'    
import uuidV4 from 'uuid/v4' 

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuidV4()    
    }
  }
}

export function removeBook(book) {    
  return {
    type: REMOVE_BOOK,
    book
  }
}