import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState'
import UpdateBook from './UpdateBook'

const Book = ({ book }) => {
    const { deleteBook, updateBook } = useContext(GlobalContext);
    const [showUpdateBook, setShowUpdateBook] = useState(false);

    return (
        <div className={`book ${book.read ? 'read': ''}`}>
            <div className="dropdown">
                <button className="dropbutton">...</button>
                <div className="dropdown-content">
                    <button onClick={() => {
                        book.read = !book.read
                        updateBook(book)
                    }}>read</button>
                    <button onClick={() => setShowUpdateBook(!showUpdateBook)}>edit</button>
                    <button  onClick={() => deleteBook(book._id)}>delete</button>
                </div>
            </div>
            {showUpdateBook && <div className="form-container">
                <UpdateBook book={ book } onClose={() => setShowUpdateBook(!showUpdateBook)}/>
            </div>
            }
            <h3>{book.title}</h3>
            <h5>by {book.author}</h5>
            <p>{book.pages} pages</p>
        </div>
    )
}

export default Book
