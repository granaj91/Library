import { useState } from 'react'
import Header from './components/Header'
import Books from './components/Books'
import AddBook from './components/AddBook'

function App() {
  const [showAddBook, setShowAddBook] = useState(false)
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      pages: 204,
      read: false
    },
    {
      id: 2,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      pages: 325,
      read: false
    },
    {
      id: 3,
      title: "Find Me",
      author: "Anne Frasier",
      pages: 282,
      read: false
    },
    {
      id: 4,
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
