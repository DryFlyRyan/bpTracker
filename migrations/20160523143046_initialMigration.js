
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments().primary().unsigned();
    table.string('first_name');
    table.string('last_name');
    table.string('sex');
    table.dateTime('birthday');
    table.float('height_in_cm');
    table.float('weight_in_kgs');
    table.string('google_profile_id').nullable();
    table.boolean('authenticated').defaultTo(false);
    table.timestamp('created_at');
    table.timestamp('updated_at');
  }).then(function(){
    return knex.schema.createTable('blood_pressure_data', function(table) {
      table.increments().primary().unsigned();
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('systolic');
      table.integer('diastolic');
      table.integer('beats_per_minute');
      table.timestamp('created_at');
      table.timestamp('updated_at');

    })
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('blood_pressure_data')
  .then(function(){
    return knex.schema.dropTable('users')
  })
};
