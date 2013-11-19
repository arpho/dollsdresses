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
  }).controller('DressCtrl',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
    debug('dressId in main.js');
    var dressId = $routeParams.dressId.substring(1); // rimuovo :
    debug(dressId);
    $http.get('/api/dress/:'+dressId).success(function(dress) {
        $scope.dress = dress;
        $scope.mainPic = dress.main_foto; 
        debug($scope.mainPic);
        $scope.setImage = function(img) { // cambia la foto principale
            $scope.mainPic = img;
        }
    })
}]);
