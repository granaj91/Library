const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({path: './config/.env'});

connectDB();

const books = require('./routes/books');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/books', books);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve('..', 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));