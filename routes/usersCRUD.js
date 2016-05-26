var express = require('express');
var router  = express.Router();

var Users = require('../bookshelf/collections/users').collection;
var User = require('../bookshelf/models/user');

router.get('/', function(req, res){
  new Users()
    .fetch()
    .then(function(users){
      res.send(users)
    })
})

module.exports = router;
