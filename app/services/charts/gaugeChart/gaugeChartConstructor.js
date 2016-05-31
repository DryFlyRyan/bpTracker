angular.module('bp-bot')
.service('gaugeChartConstructorFactory', function(){

  this.createGaugeChart = function(options){
    var defaultOptions = {
      width: 200,
      height: 200,
      minorTicks: 5,
      min: 0,
      max: 100
    }

    var label, value;
    var newChart = {};
    newChart.type = "Gauge";
    newChart.options = defaultOptions;

    for (var key in options) {
      if (newChart.options.hasOwnProperty(key)) {
        newChart.options[key] = options[key];
      } else if (key === 'label') {
        label = options[key]
      } else if (key === 'value') {
        value = options[key]
      } else {
        newChart.options[key] = options[key];
      }
    }
    newChart.data = [
      ['Label', 'Value'],
      [label, value]
    ];
    return newChart;
  }
})
