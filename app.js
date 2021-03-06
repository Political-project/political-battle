var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var cors = require('cors');


var posts = require('./routes/posts');

var app = express();

// app.use(cors()) // CORS!!!!!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static('public'))  /// mix added this

app.use('/api/v1/posts', posts);

module.exports = app;
