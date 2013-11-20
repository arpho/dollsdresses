'use strict';

angular.module('dollsdressesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dresses', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/dress/:dressId', {
        templateUrl: 'views/dress_detail.html',
        controller: 'DressCtrl'
    })
      .otherwise({
        redirectTo: '/dresses'
      });
  });
