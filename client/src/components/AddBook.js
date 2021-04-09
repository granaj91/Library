import { useState } from 'react'

const AddBook = ({ onAdd, onClose }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [read, setRead] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a book')
            return
        }
        onClose();
        onAdd({ title, author, pages, read })
        setTitle('')
        setAuthor('')
        setPages('')
        setRead(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Book Title' 
                value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input type='text' placeholder='Book Author' 
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
            <input type='submit' value='Add To Library' 
            className='button btn-block' />
            <button className="button close" onClick={ onClose }>Close</button>
        </form>
    )
}

export default AddBook
