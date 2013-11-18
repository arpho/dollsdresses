'use strict';

angular.module('dollsdressesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/dress').success(function(dresses) {
      $scope.dresses = dresses;
    });
  });
