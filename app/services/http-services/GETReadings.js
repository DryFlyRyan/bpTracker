angular.module('bp-bot')
  .factory('readingsGetterFactory',
  function($http) {
    return {
      getReadings: function() {
        return new Promise(function(resolve, reject){
          $http.get('./api/v1/readings')
          .then(function(readings){
            if (readings) {
              resolve(readings);
            } else {
              throw new err;
            }
          })
          .catch(function(err){
            reject(err);
          })
        })
      }
    }
  })
