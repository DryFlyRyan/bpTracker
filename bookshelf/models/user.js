var Bookshelf = require('../../database');
require('./reading');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  Reading: function() {
    return this.hasMany('Reading')
  }
})

module.exports = Bookshelf.model('User', User)
