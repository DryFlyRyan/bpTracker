'use strict';

angular.module('bp-bot', [
  'oc.lazyLoad',
  'ui.router',
  'ngAnimate',
  'angularMoment',
  'googlechart'
]).config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$locationProvider', function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $locationProvider){

  $ocLazyLoadProvider.config({
    debug:false,
    events:true
  })

  $urlRouterProvider.otherwise('/dashboard/home');

  $stateProvider
    .state('home', {
      url:'/dashboard',
      templateUrl: 'app/home/home.html',
      resolve: {
        loadMyDirectives:function($ocLazyLoad){
          return $ocLazyLoad.load(
            {
              // Load Root CTRLs && SVCs
              name: 'bp-bot',
              files: [

              ]
            }
          ),
          $ocLazyLoad.load(
            {
              name: 'moment',
              files: [
                'bower_components/moment/moment.js'
              ]
            }
          ),
          $ocLazyLoad.load(
            {
              name:'angular-moment',
              files:[
                'bower_components/angular-moment/angular-moment.js'
              ]
            }
          )
          $ocLazyLoad.load(
            {
              name:'googlechart',
              files:[
                'bower_components/angular-google-chart/ng-google-chart.js'
              ]
            }
          )

        },
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'gaugeChartConstructor',
            files:[
              'app/services/charts/gaugeChart/gaugeChartConstructor.js'
            ]
          }),
          $ocLazyLoad.load({
            name: 'gaugeChartBuilder',
            files: [
              'app/services/charts/gaugeChart/gaugeChartInstances.js'
            ]
          }),
          $ocLazyLoad.load({
            name: 'readingsGetter',
            files:[
              'app/services/http-services/GETReadings.js'
            ]
          })
        }
      }
    })
    .state('home.dashboard', {
      url:'/home',
      controller: 'DashboardCTRL',
      templateUrl:'app/dashboard/dashboard.html',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'dashboard',
            files:[
              'app/dashboard/dashboard.js'
            ]
          })
        }
      }
    })
    .state('home.newReading', {
      url:'/readings/new',
      controller: 'newReadingCTRL',
      templateUrl:'app/newReading/newReading.html',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'newReading',
            files:[
              'app/newReading/newReading.js'
            ]
          }),
          $ocLazyLoad.load({
            name: 'readingSetter',
            files:[
              'app/services/http-services/POSTNewReading.js'
            ]
          })
        }
      }
    })
    .state('home.dashboard.listReadings', {
      url:'',
      controller: 'DashboardCTRL',
      templateUrl:'app/listReadings/listReadings.html'
    })
    .state('home.login', {
      url:'/login',
      controller: 'LoginCTRL',
      templateUrl:'app/login/login.html',
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'login',
            files:[
              'app/login/login.js'
            ]
          })
        }
      }
    })
  }
]);
