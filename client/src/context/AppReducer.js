const AppReducer = (state, action) => {
    switch(action.type) {
      case 'GET_BOOKS':
        return {
          ...state,
          loading: false,
          books: action.payload
        }
      case 'DELETE_BOOK':
        return {
          ...state,
          books: state.books.filter(book => book._id !== action.payload)
        }
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload]
        }
      case 'UPDATE_BOOK':
        return {
          ...state,
          books: state.books.map(book => book)
        }
      case 'SET_SORTBY':
        return {
          ...state,
          sortby: action.payload
        }
      case 'BOOK_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
}

export default AppReducer