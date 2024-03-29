'use strict';

describe('Controller: BooksCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var BooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BooksCtrl = $controller('BooksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
