angular.module('bp-bot')
  .controller('DashboardCTRL', ['$scope', 'gaugeChartBuilder', 'readingsGetterFactory', function($scope,  gaugeChartBuilder, readingsGetterFactory){

    (function() {
      var formattedReadings = []
      return new Promise(function(resolve, reject){
        readingsGetterFactory.getReadings()
        .then(function(readings){
          $scope.readings = readings.data;
          buildCharts()
          $scope.$apply();
        })
        .catch(function(err){
          reject(err)
        })
      })
    })()

    function average(key) {
      var sum = 0;
      $scope.readings.forEach(function(element) {
        sum += element[key];
      })
      return sum / $scope.readings.length;
    }

    function buildCharts() {
      $scope.systolicGaugeChart = gaugeChartBuilder.createSystolicChart(Math.floor(average('systolic')))
      $scope.diastolicGaugeChart = gaugeChartBuilder.createDiastolicChart(Math.floor(average('diastolic')))
      $scope.bpmGaugeChart = gaugeChartBuilder.createBPMChart(Math.floor(average('beats_per_minute')))
    }

  }])
