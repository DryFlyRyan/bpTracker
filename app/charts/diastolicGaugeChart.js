angular.module('bp-bot')
.controller('diastolicGaugeChartCTRL', function($scope){
  console.log("Attempting to build Systolic Gauge Chart");
  $scope.diastolicGaugeChart = {};
  $scope.diastolicGaugeChart.type = "Gauge";

  $scope.diastolicGaugeChart.options = {
  width: 200,
  height: 200,
  redFrom: 140,
  redTo: 200,
  yellowFrom: 120,
  yellowTo: 140,
  minorTicks: 10,
  min: 40,
  max: 200
  };

  $scope.diastolicGaugeChart.data = [
    ['Label', 'Value'],
    ['Systolic', 80]
  ];
});
