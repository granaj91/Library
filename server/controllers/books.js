const { findById } = require('../models/Book');
const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/v1/books
// @access  Public
exports.getBooks = async (req, res, next) => {
    try{
        const books = await Book.find();

        return res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// @desc    Add book
// @route   POST /api/v1/books
// @access  Public
exports.addBook = async (req, res, next) => {
    
    try{
        const { title, author, pages, read } = req.body;

        const book = await Book.create(req.body);

        return res.status(201).json({
            success: true,
            data: book
        });
        
    }catch(err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            })
        }else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

// @desc    Update book
// @route   PUT /api/v1/books/:id
// @access  Public
exports.updateBook = async (req, res, next) => {
    try{
        const book = await Book.findById(req.params.id);

        if(!book){
            return res.status(404).json({
                success: false,
                error: "No book found"
            });
        }

        await book.update(req.body)

        return res.status(200).json({
            success: true,
            data: book
        });

    } catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

// @desc    Delete book
// @route   GDELETE /api/v1/books/:id
// @access  Public
exports.deleteBook = async (req, res, next) => {
    try{
        const book = await Book.findById(req.params.id);

        if(!book){
            return res.status(404).json({
                success: false,
                error: "No book found"
            });
        }

        await book.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}