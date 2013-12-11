'use strict';
var debug = function(s) {
    console.log(s);
}
angular.module('dollsdressesApp')
  .controller('MainCtrl', function ($rootScope,$scope, $http,md5,createDialog) {
    $http.get('/api/dress').success(function(dresses) {
      $rootScope.dresses = dresses;
        var lines = [];
        for (var i=0;i<dresses.length;i++) {
            if(lines.indexOf(dresses[i].linea)<0) {
                lines.push(dresses[i].linea)
                
            }
            
        };
        $scope.lines = lines;
        //$scope.lineProp = 'Fashion';
        
        $scope.login = function(){
            //debug($scope.userName+' '+md5.createHash($scope.password));
            var data = {uname:$scope.userName,pwd:md5.createHash($scope.password)};
            $http.post('/api/login/',data).success(function(u) {
                //debug(u);
                if(u.name) {
                    debug('ciao '+u.name);
                    $rootScope.loggedUser = u;
                    createDialog('views/simpleModal.html',{
    id : 'test',
              template:
                '<div class="row-fluid">' +
                ' <h3>This is how the Simple Modal was launched</h3>' +
                ' <div>' +
                '   <div class="codebox">' +
                '<pre>' +
                'createDialog({\n' +
                '    id: "inlineDialog",\n' +
                '    <span style="color:red">template: "&lt;div>&lt;!--template HTML here...-->&lt;/div>"</span>\n' +
                '    title: "A Inline Modal Dialog",\n' +
                '    backdrop: true,\n' +
                '    success: {\n' +
                '        label: "Yay",\n' +
                '        fn: function(){\n' +
                '            console.log("Inline modal closed");\n' +
                '        }\n' +
                '    }\n' +
                '});\n' +
                '</pre>\n' +
                '   </div>\n' +
                ' </div>\n' +
                '</div>',
              title: 'A Inline Modal Dialog',
    backdrop: true,
    success: {label: 'Yay',fn: function(){console.log('Successfully closed modal');}},
    cancel: {label: 'Close',fn: function(){console.log('Successfully closed modal with close');}},
    controller: 'ModalCtrl',
   // backdropClass: [modal_backdrop_class],
    //footerTemplate: [modal_footer_template],
   // modalClass: [modal_class],
    css: {
        top: '100px',
        left: '30%',
        margin: '0 auto'
      }
}, {msg:'ciao modal'});
        debug('vedi il popup?');
                } else {
                debug('username o password errati');
            }
        
            })
            
        }
        
                                                   
                
                
                
            
        
    });
  }).controller('DressCtrl',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
    debug('dressId in main.js');
    var dressId = $routeParams.dressId.substring(1); // rimuovo :
    debug(dressId);
    $http.get('/api/dress/:'+dressId).success(function(dress) {
        $scope.dress = dress;
        $scope.mainPic = dress.main_foto; 
        $scope.dress.gallery.push(dress.main_foto);
        debug('dress');
        debug(dress);
    
        $scope.setImage = function(img) { // cambia la foto principale
            //debug('change pict');
            $scope.mainPic = img;
        }
    })
}]).controller('ModalCtrl',['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    
    
    debug('modalCtrl');
   }]).controller('BackendCtrl',['$scope',function($scope) {
    debug('back-end')
}]).controller('AddDressCtrl',['$scope',function($scope) {
    debug('add Dress');
    $scope.imageDropped = function() {
        debug('dropped smt');
       //Get the file
    var file = $scope.uploadedFile;

    //Upload the image
    //(Uploader is a service in my application, you will need to create your own)
    Uploader.uploadImage(file).then(
        function(imageUrl){
            debug(imageUrl);
        }
    );

    //Clear the uploaded file
    $scope.uploadedFile = null;
};
}]).controller('AddDressCtrl',['$scope',function($scope){
    debug('uploaded file');
    $scope.results = function(content, completed) {
        if (completed && content.length > 0) {
            debug('ok');
            console.log(content); // process content
        }
        else
      {
        // 1. ignore content and adjust your model to show/hide UI snippets; or
        // 2. show content as an _operation progress_ information
      }
    }
}]);
