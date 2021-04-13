const express = require('express');
const router = express.Router();
const { getBooks, addBook, deleteBook } = require('../controllers/books');

router
    .route('/')
    .get(getBooks)
    .post(addBook);

router
    .route('/:id')
    .delete(deleteBook);

module.exports = router;