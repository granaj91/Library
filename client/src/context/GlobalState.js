import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  books: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getBooks(){
    try {
      const res = await axios.get('/api/v1/books');

      dispatch({
        type: 'GET_BOOKS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'BOOK_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteBook(id) {
    try {
      await axios.delete(`/api/v1/books/${id}`);
      
      dispatch({
        type: 'DELETE_BOOK',
        payload: id
      });
    } catch(err) {
      dispatch({
        type: 'BOOK_ERROR',
        payload: err.response.data.error
      });
    }
   
  }

  async function addBook(book) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/books', book, config);

      dispatch({
        type: 'ADD_BOOK',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'BOOK_ERROR',
        payload: err.response.data.error
      });
    }
    
  }

  async function updateBook(book) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/v1/books/${book._id}`, book, config);
      console.log(res.data)
      dispatch({
        type: 'UPDATE_BOOK',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'BOOK_ERROR',
        payload: err.response.data.error
      });
    }
    
  }

  return (<GlobalContext.Provider value={{
    books: state.books,
    loading: state.loading,
    error: state.error,
    getBooks,
    deleteBook,
    addBook,
    updateBook
  }}>
    {children}
  </GlobalContext.Provider>);
}