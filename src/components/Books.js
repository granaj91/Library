import Book from './Book'

const Books = ({ books }) => {
    return (
        <div className="books">
            { books.map((book) => (<Book book={book}/>))}
        </div>
    )
}

export default Books
