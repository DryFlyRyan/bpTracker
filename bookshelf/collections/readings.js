var Bookshelf = require('../../database');
var Reading = require('../models/reading');

exports.collection = Bookshelf.Collection.extend({
  model: Reading
})
