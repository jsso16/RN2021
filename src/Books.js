// 예제 8.6 - Redux store 객체와 bookReducer 데이터에 접근하기
import React from 'react'
// 예제 8.9 - 추가적으로 import 해주기
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,    
  TouchableOpacity    
} from 'react-native'
// 예제 8.15 - removeBook 기능 추가하기
import {addBook, removeBook} from './actions'    
import {connect} from 'react-redux'

const initialState = {    
  name: '',    
  author: ''    
}

// 예제 8.10 - state와 class 메소드 추가하기
class Books extends React.Component {

  state = initialState    

  updateInput = (key, value) => {    
    this.setState({
      ...this.state,
      [key]: value
    })
  }

  addBook = () => {    
    this.props.dispatchAddBook(this.state)
    this.setState(initialState)
  }

  removeBook = (book) => {
    this.props.dispatchRemoveBook(book)
  }

  render() {
    const {books} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.booksContainer}
        >
          {books.map((book, index) => (
            <View style={styles.book} key={index}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text onPress={() => this.removeBook(book)}>
                Remove
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.name}
              onChangeText={value => this.updateInput('name', value)}
              style={styles.input}
              placeholder='Book name'
            />
            <TextInput
              value={this.state.author}
              onChangeText={value => this.updateInput('author', value)}
              style={styles.input}
              placeholder='Author Name'
            />
          </View>
          <TouchableOpacity onPress={this.addBook}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // 예제 8.11 - 폼에 UI 추가하기
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  }
})

// 예제 8.5 - connect 함수 넣기
const mapStateToProps = (state) => ({
  books: state.bookReducer.books
})

const mapDispatchToProps = {
  dispatchAddBook: (book) => addBook(book),
  dispatchRemoveBook: (book) => removeBook(book)
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)