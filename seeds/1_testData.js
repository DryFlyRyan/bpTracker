
exports.seed = function(knex, Promise) {
  return knex('users').del().then(function(){
    return Promise.all([
      knex('users').insert({
        first_name: "Ryan",
        last_name: "Douglas",
        sex: "Male",
        birthday: new Date(1983, 3, 1),
        height_in_cm: 172.2,
        weight_in_kgs: 76.2,
        google_profile_id: null,
        authenticated: true,
        created_at: new Date(),
        updated_at: new Date()
      })
    ])
  }).then(function(){
    return knex('blood_pressure_data').del().then(function(){
      return Promise.all([
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 125,
          diastolic: 85,
          beats_per_minute: 80,
          created_at: new Date(2016, 2, 15),
          updated_at: new Date(2016, 2, 15),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 120,
          diastolic: 80,
          beats_per_minute: 80,
          created_at: new Date(2016, 2, 16),
          updated_at: new Date(2016, 2, 16),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 110,
          diastolic: 80,
          beats_per_minute: 65,
          created_at: new Date(2016, 2, 17),
          updated_at: new Date(2016, 2, 17),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 118,
          diastolic: 80,
          beats_per_minute: 65,
          created_at: new Date(2016, 4, 10),
          updated_at: new Date(2016, 4, 10),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 125,
          diastolic: 90,
          beats_per_minute: 82,
          created_at: new Date(2016, 4, 11),
          updated_at: new Date(2016, 4, 11),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 122,
          diastolic: 85,
          beats_per_minute: 75,
          created_at: new Date(2016, 4, 12),
          updated_at: new Date(2016, 4, 12),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 125,
          diastolic: 85,
          beats_per_minute: 70,
          created_at: new Date(2016, 4, 13),
          updated_at: new Date(2016, 4, 13),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 128,
          diastolic: 87,
          beats_per_minute: 80,
          created_at: new Date(2016, 4, 14),
          updated_at: new Date(2016, 4, 14),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 125,
          diastolic: 84,
          beats_per_minute: 77,
          created_at: new Date(2016, 4, 15),
          updated_at: new Date(2016, 4, 15),
        }),
        knex('blood_pressure_data').insert({
          user_id: 1,
          systolic: 128,
          diastolic: 82,
          beats_per_minute: 70,
          created_at: new Date(2016, 4, 16),
          updated_at: new Date(2016, 4, 16),
        })

      ])
    })
  })
};
