'use strict';
var debug = function(s) {
    console.log(s);
}
angular.module('dollsdressesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/dress').success(function(dresses) {
      $scope.dresses = dresses;
        var lines = [];
        for (var i=0;i<dresses.length;i++) {
            if(lines.indexOf(dresses[i].linea)<0) {
                lines.push(dresses[i].linea)
                
            }
            
        };
        $scope.lines = lines;
        $scope.lineProp = '';
        debug('linee');
        debug(lines);
        
    });
  });
