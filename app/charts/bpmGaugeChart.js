angular.module('bp-bot')
.controller('bpmGaugeChartCTRL', function($scope){
  console.log("Attempting to build BPM Gauge Chart");
  $scope.bpmGaugeChart = {};
  $scope.bpmGaugeChart.type = "Gauge";

  $scope.bpmGaugeChart.options = {
  width: 200,
  height: 200,
  redFrom: 110,
  redTo: 200,
  yellowFrom: 80,
  yellowTo: 110,
  minorTicks: 10,
  min: 40,
  max: 200
  };

  $scope.bpmGaugeChart.data = [
    ['Label', 'Value'],
    ['BPM', 82]
  ];
});
