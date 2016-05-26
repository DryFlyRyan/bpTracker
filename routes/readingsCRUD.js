var express = require('express');
var router  = express.Router();

var Readings = require('../bookshelf/collections/readings').collection;
var Reading = require('../bookshelf/models/reading');

router.get('/', function(req, res){
  new Readings()
    .fetch({withRelated: [
      'User'
    ]})
    .then(function(users){
      res.send(users)
    })
})

module.exports = router;
