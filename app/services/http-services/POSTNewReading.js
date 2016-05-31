angular.module('bp-bot')
.factory('newReadingFactory', function($http){
  return {
    postReading: function(body){
      return new Promise(function(resolve, reject) {
        console.log(body);
        $http.post('./api/v1/readings', {
          bpm: body.bpm,
          systolic: body.systolic,
          diastolic: body.diastolic,
          user_id: body.user_id
        })
        .then(function(results){
          resolve(results);
        })
        .catch(function(err){
          reject(err);
        })
      })
    }
  }
})
