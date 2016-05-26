var Bookshelf = require('../../database');

require('./user');

var Reading = Bookshelf.Model.extend({
  tableName: 'readings',
  hasTimestamps: true,
  User: function() {
    return this.belongsTo('User', 'user_id')
  }
})

module.exports = Bookshelf.model('Reading', Reading)
