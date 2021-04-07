import Book from './Book'

const Books = ({ books, sort }) => {
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
        <div className="books">
            <div className="book-container">
                { unread.map((book) => (<Book key={book.id} book={book}/>))}
            </div>
            <div>
                <h3>Read Books</h3>
            </div>
            <div className="book-container">
                { read.map((book) => (<Book key={book.id} book={book}/>))}
            </div>
        </div>
    )
}

Books.defaultProps = {
    sort: "author",
}

export default Books
