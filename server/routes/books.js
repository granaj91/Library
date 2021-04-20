const express = require('express');
const router = express.Router();
const { getBooks, addBook, deleteBook, updateBook } = require('../controllers/books');

router
    .route('/')
    .get(getBooks)
    .post(addBook);

router
    .route('/:id')
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;