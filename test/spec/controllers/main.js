'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dollsdressesApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/dress')
      .respond([
{
_id: "5289e22b1ab5bf98019b0518",
descrizione: "Abito lana bianco",
linea: "fashion",
main_foto: "dress1.jpg",
nome: "Abito lana bianco",
gallery: [
"dress01.jpg",
"dress02.jpg"
]
},
{
_id: "5289e9db3b9f158b7d041332",
nome: "Abito classico 1",
descrizione: "Altro abito",
linea: "fashion",
main_foto: "dress2.jpg",
gallery: [ ]
}
]);    
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of dress to the scope', function () {
    expect(scope.awesomeThings).toBeUndefined();
    $httpBackend.flush();
    expect(scope.dresses.length).toBe(2);
  });
});
