(function() {
  'use strict';
  angular.module('bp-app', [
// Angular libraries
    'ui.router',
    'ngAnimate',
// Foundation UI components
    'foundation',
// Routing with front matter
    'foundation.dynamicRouting',
// Transitioning between views
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;
  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  function config($urlProvider, $locationProvider) {
// Default to the index view if the URL loaded is not found
    $urlProvider.otherwise('/');
// Use this to enable HTML5 mode
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
// Use this to set the prefix for hash-bangs
// Example: example.com/#!/page
    $locationProvider.hashPrefix('!');
  }
  function run() {
// Enable FastClick to remove the 300ms click delay on touch devices
    FastClick.attach(document.body);
  }
})();
