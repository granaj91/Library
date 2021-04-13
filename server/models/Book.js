const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add book title']
    },
    author: {
        type: String,
        trim: true,
        required: [true, 'Please add book author']
    },
    pages: {
        type: Number,
        required: [true, 'Please add number of pages']
    },
    read: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Book', BookSchema);