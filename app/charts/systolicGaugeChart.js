angular.module('bp-bot')
.controller('systolicGaugeChartCTRL', function($scope){
  $scope.systolicGaugeChart = {};
  $scope.systolicGaugeChart.type = "Gauge";

  $scope.systolicGaugeChart.options = {
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

  $scope.systolicGaugeChart.data = [
    ['Label', 'Value'],
    ['Diastolic', 125]
  ];
});
