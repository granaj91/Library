const Book = ({ book }) => {
    return (
        <div className={`book ${book.read ? 'read': ''}`}>
            <h3>{book.title}</h3>
            <h5>by {book.author}</h5>
            <p>{book.pages} pages</p>
        </div>
    )
}

export default Book
