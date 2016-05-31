angular.module('bp-bot')
.factory('gaugeChartBuilder', ['gaugeChartConstructorFactory', function(gaugeChartConstructorFactory){
  return {
    createSystolicChart: function(value) {
      var newSystolicChart = new gaugeChartConstructorFactory.createGaugeChart({
        label: 'Systolic',
        value: value,
        redFrom: 140,
        redTo: 200,
        yellowFrom: 120,
        yellowTo: 140,
        max: 200
      })
      return newSystolicChart
    },
    createDiastolicChart: function(value) {
      var newDiastolicChart = new gaugeChartConstructorFactory.createGaugeChart({
        label: 'Diastolic',
        value: value,
        yellowFrom: 80,
        yellowTo: 90,
        redFrom: 90,
        redTo:140,
        max: 140
      })
      return newDiastolicChart
    },
    createBPMChart: function(value) {
      var newBPMChart = new gaugeChartConstructorFactory.createGaugeChart({
        label: 'BPM',
        value: value,
        yellowFrom: 90,
        yellowTo: 110,
        redFrom: 110,
        redTo: 200,
        max: 200
      })
      return newBPMChart
    }
  }
}])
