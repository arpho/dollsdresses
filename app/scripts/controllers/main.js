'use strict';
var debug = function(s) {
    console.log(s);
}
angular.module('dollsdressesApp')
  .controller('MainCtrl', function ($rootScope,$scope, $http,md5,createDialog) {
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
        $scope.login = function()
        //debug($scope.userName+' '+md5.createHash($scope.password));
        $http.post('/api/login/:'+$scope.userName+'/:'+md5.createHash($scope.password)).success(function(u) {
            //debug(u);
            if(u.name) {
                debug('ciao '+u.name)
                createDialog([template_url],{
    id : [modal_id],
    title: [modal_title],
    backdrop: [backdrop_visible],
    success: [modal_success_button],
    cancel: [modal_cancel_button],
    controller: [modal_controller],
    backdropClass: [modal_backdrop_class],
    footerTemplate: [modal_footer_template],
    modalClass: [modal_class],
    css: {
        [css properties key: value]
    }
}, {modal_custom_data});
                $rootScope.loggedUser = u;
                
            } else {
                debug('username o password errati');
            }
        });
        
    });
  }).controller('DressCtrl',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
    debug('dressId in main.js');
    var dressId = $routeParams.dressId.substring(1); // rimuovo :
    debug(dressId);
    $http.get('/api/dress/:'+dressId).success(function(dress) {
        $scope.dress = dress;
        $scope.mainPic = dress.main_foto; 
        $scope.dress.gallery.push(dress.main_foto);
        debug($scope.mainPic);
        $scope.setImage = function(img) { // cambia la foto principale
            $scope.mainPic = img;
        }
    })
}]);
