import { useState } from 'react'
import Header from './components/Header'
import Books from './components/Books'
import AddBook from './components/AddBook'
import { GlobalProvider } from './context/GlobalState'

function App() {
  const [showAddBook, setShowAddBook] = useState(false)
 
  return (
    <GlobalProvider>
      <div className="App">
        <Header title="Library" 
            onAdd={() => setShowAddBook(!showAddBook)}
            showAdd={showAddBook}
        />
        {showAddBook && 
          <div className="form-container">
            <AddBook onClose={() => setShowAddBook(!showAddBook)}/>
          </div>
        }
        <Books />
      </div>
    </GlobalProvider>
  );
}

export default App;
