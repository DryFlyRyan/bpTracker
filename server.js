var express   = require('express');
var http      = require('http');
var port      = process.env.PORT || 3000;

// Auth Middleware
var passport  = require('passport');
var gStrategy = require('passport-google-oauth2')

// var fbStrategy, localStrategy;

// Server Functions
var app       = express();
var server    = http.Server(app);

// Passport Strategies and Functions

// Routes
var apiRoot   = '/api/v1';
// var user      = require('./routes/user/user');


// Server Functions
server.listen(port, function() {
  console.log('Listening on ', port);
})
