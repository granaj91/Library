import Book from './Book'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Books = ({ onUpdate }) => {
    const { books, sortby, getBooks } = useContext(GlobalContext);

    useEffect(() => {
        getBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   
    books.sort((a, b) => {
        let nameA, nameB;
        if(sortby === "author"){
            nameA = a.author;
            nameB = b.author;
        }else if(sortby === "title"){
            nameA = a.title;
            nameB = b.title;
        }

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    })
    
    const unread = books.filter((book) => (!book.read))
    const read = books.filter((book) => (book.read))
    return (
        <>
            {(books.length > 0) ? <div className="books">
                <div className="book-container">
                    { unread.map((book) => (<Book key={book._id} book={book} onUpdate={onUpdate}/>))}
                </div>
                <div className="title-container">
                    <h3>Finished Books</h3>
                </div>
                <div className="book-container">
                    { read.map((book) => (<Book key={book._id} book={book} onUpdate={onUpdate}/>))}
                </div>
            </div>: <h3 className="empty-library">Your library is empty. Please add a book.</h3>}
        </>
    )
}

export default Books
