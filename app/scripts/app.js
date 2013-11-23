'use strict';

angular.module('dollsdressesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-md5',
  'fundoo.services',
  'ui.imagedrop',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dresses', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/dress/:dressId', {
        templateUrl: 'views/dress_detail.html',
        controller: 'DressCtrl'
    }).when('/bacheca', {
        templateUrl:'views/bacheca.html'
    }).when('/contatti', {
        templateUrl:'views/contatti.html'
    }).when('/back_end',{
    templateUrl:'views/back_end.html',
    controller: 'BackendCtrl'
    }).when('/add_dress',{
    templateUrl:'views/add_dress.html',
    controllers: 'AddDressCtrl'
    })
      .otherwise({
        redirectTo: '/dresses'
      });
  });
