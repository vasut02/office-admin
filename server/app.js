var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// setup server side rendering 
app.use(express.static(path.join(__dirname, 'public')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    const index = path.join(__dirname,'public', 'index.html');
    res.sendFile(index);
});

module.exports = app;
