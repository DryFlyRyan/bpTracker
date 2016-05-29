var express     = require('express');
var http        = require('http');
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 3000;

// Auth Middleware
var passport  = require('passport');
var gStrategy = require('passport-google-oauth2')

// var fbStrategy, localStrategy;

// Server Functions
var app       = express();
var server    = http.Server(app);

// Passport Strategies and Functions

// Middleware

app.use(express.static('.'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

// Routes
var apiRoot     = '/api/v1';
var userCRUD    = require('./routes/usersCRUD');
var readingCRUD = require('./routes/readingsCRUD');

app.use(apiRoot + '/users', userCRUD);
app.use(apiRoot + '/readings', readingCRUD);

// Server Functions
server.listen(port, function() {
  console.log('Listening on ', port);
});

module.exports = app;
