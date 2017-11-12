

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var producer = require('./user/producer');
var consumer = require('./user/consumer');
app.use('/users', UserController);
app.use('/', producer);
app.use('/',consumer);

module.exports = app;

// ./user/UserController UserController.js file user directory