'use strict';
console.log("Angular Starting Up");

angular.module('bpBot', [
  'oc.lazyLoad',
  'ui.router',
  'ngAnimate',
  'angularMoment'
]).config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$locationProvider', function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $locationProvider){
  console.log("Lazy Loading");

  $ocLazyLoadProvider.config({
    debug:false,
    events:true
  })

  // $urlRouterProvider.otherwise('/dashboard/home');


  $stateProvider
    .state('home', {
      url:'',
      templateUrl: 'app/home/home.html',
      resolve: {
        loadMyDirectives:function($ocLazyLoad){
          return $ocLazyLoad.load(
            {
              // Load Root CTRLs && SVCs
              name: 'bpBot',
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
          );
        }
      }
    })
    .state('home.dashboard', {
      url:'/dashboard',
      // controller: 'DashboardCTRL',
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
