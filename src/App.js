import { useState } from 'react'
import Header from './components/Header'
import Books from './components/Books'

function App() {
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
  return (
    <div className="App">
      <Header title="Library" />
      <Books books={books} />
    </div>
  );
}

export default App;
