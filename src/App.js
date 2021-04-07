import { useState } from 'react'
import Header from './components/Header'
import Books from './components/Books'
import AddBook from './components/AddBook'

function App() {
  const [showAddBook, setShowAddBook] = useState(false)
  const [books, setBooks] = useState([
    {
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      pages: 423,
      read: false
    },
    {
      title: "The Two Towers",
      author: "J.R.R. Tolkien",
      pages: 352,
      read: false
    },
    {
      title: "The Return of the King",
      author: "J.R.R. Tolkien",
      pages: 416,
      read: false
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      pages: 432,
      read: true
    }
  ])

  const addBook = ({ title, author, pages, read}) => {
    let book = {
      title: title,
      author: author,
      pages: pages,
      read: read
    }

    setBooks([...books, book])
  }
  return (
    <div className="App">
      <Header title="Library" 
          onAdd={() => setShowAddBook(!showAddBook)}
          showAdd={showAddBook}
      />
      {showAddBook && 
        <div className="form-container">
          <AddBook onAdd={addBook} onClose={() => setShowAddBook(!showAddBook)}/>
        </div>
      }
      <Books books={books} />
    </div>
  );
}

export default App;
