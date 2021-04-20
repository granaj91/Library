import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const UpdateBook = ({ book, onClose }) => {
    const { updateBook } = useContext(GlobalContext)
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [pages, setPages] = useState(book.pages)
    const [read, setRead] = useState(book.read)

    const onSubmit = (e) => {
        e.preventDefault()
        book.title = title
        book.author = author
        book.pages = pages
        book.read = read

        onClose();
        updateBook(book);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text'
                value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input type='text'
                value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Number of Pages</label>
                <input type='number' min="1"
                value={pages} onChange={(e) => setPages(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Finished Reading</label>
                <input type='checkbox'
                checked={read}
                value={read} 
                onChange={(e) => setRead(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Update Book' 
            className='button btn-block' />
            <button className="button close" onClick={ onClose }>Cancel</button>
        </form>
    )
}

export default UpdateBook
