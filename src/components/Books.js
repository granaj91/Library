import Book from './Book'

const Books = ({ books }) => {
    return (
        <>
            { books.map((book) => (<Book book={book}/>))}
        </>
    )
}

export default Books
