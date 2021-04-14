import Book from './Book'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Books = ({ sort }) => {
    const { books, getBooks } = useContext(GlobalContext);

    useEffect(() => {
        getBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(sort === "author"){
        books.sort((a, b) => {
            const authorA = a.author.toLowerCase();
            const authorB = b.author.toLowerCase();
            if (authorA < authorB) {
              return -1;
            }
            if (authorA > authorB) {
              return 1;
            }
            return 0;
        })
    }
    const unread = books.filter((book) => (!book.read))
    const read = books.filter((book) => (book.read))
    return (
        <>
            {(books.length > 0) ? <div className="books">
                <div className="book-container">
                    { unread.map((book) => (<Book key={book.id} book={book}/>))}
                </div>
                <div className="title-container">
                    <h3>Finished Books</h3>
                </div>
                <div className="book-container">
                    { read.map((book) => (<Book key={book.id} book={book}/>))}
                </div>
            </div>: <h3 className="empty-library">Your library is empty. Please add a book.</h3>}
        </>
    )
}

Books.defaultProps = {
    sort: "author",
}

export default Books
