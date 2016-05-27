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

router.post('/', function(req, res){
  new Reading({
    user_id: req.body.user_id,
    systolic: req.body.systolic,
    diastolic: req.body.diastolic,
    beats_per_minute: req.body.bpm,
  }).save()
  .then(function(){
    return new Readings()
      .fetch()
  })
  .then(function(readings){
    res.status(200).send(readings)
  })
  .catch(function(err){
    res.status(501).send(err)
  })
})

module.exports = router;
