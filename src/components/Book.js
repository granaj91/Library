const Book = ({ book }) => {
    return (
        <div className={`book ${book.read ? 'read': ''}`}>
            <h3>book.title</h3>
            <h4>book.author</h4>
            <p>book.pages</p>
        </div>
    )
}

export default Book
