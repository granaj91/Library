import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const Book = ({ book }) => {
    const { deleteBook } = useContext(GlobalContext);

    return (
        <div className={`book ${book.read ? 'read': ''}`}>
            <button className="delete-button" onClick={() => deleteBook(book._id)}>X</button>
            <h3>{book.title}</h3>
            <h5>by {book.author}</h5>
            <p>{book.pages} pages</p>
        </div>
    )
}

export default Book
