angular.module('bp-bot')
  .controller('newReadingCTRL', ['$scope', 'newReadingFactory', '$state', function($scope, newReadingFactory, $state){
    $scope.setReading = function() {
      return new Promise(function(resolve, reject){
        newReadingFactory.postReading({
          bpm: $scope.bpm,
          systolic: $scope.systolic,
          diastolic: $scope.diastolic,
          user_id: 1
        })
      })
      .then(function(results){
        console.log(results);
        $state.go('home.listReadings')
      })
    }
  }])
