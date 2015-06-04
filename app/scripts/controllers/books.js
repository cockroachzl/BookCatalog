'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  //.controller('BooksController', function ($scope, booksService) {
  //  $scope.books = booksService.getAll();
  //
  //  for (var i = 0; i < $scope.books.length; ++i) {
  //    $scope.books[i].templateUrl = (i % 2 === 0 ?
  //      'views/templates/master_img_left.template.html' :
  //      'views/templates/master_img_right.template.html');
  //  }
  //})
  /*
     using templateCache service
   */
  //.controller('BooksController', function ($scope, booksService, $templateCache, $http) {
  //  var templates = ['views/templates/master_img_left.template.html',
  //    'views/templates/master_img_right.template.html'];
  //
  //  var loadbooks = function() {
  //    $scope.books = booksService.getAll();
  //    for (var i = 0; i < $scope.books.length; ++i) {
  //      $scope.books[i].templateUrl = templates[i % 2];
  //    }
  //  }
  //
  //  var done = 0;
  //  angular.forEach(templates, function(templateUrl) {
  //    $http.get(templateUrl).success(function(data){
  //      $templateCache.put(templateUrl, data);
  //      if (++done == templates.length) {
  //        loadbooks();
  //      }
  //    });
  //  });
  //
  //})
  .controller('BooksController', function ($scope, booksService) {
    $scope.pageClass = 'master-view';
    $scope.books = booksService.getAll();
    var templates = ['views/templates/master_img_left.template.html',
      'views/templates/master_img_right.template.html'];
    var setAlternatingTemplates = function() {
      for (var i = 0; i < $scope.books.length; ++i) {
        $scope.books[i].templateUrl = templates[i % 2];
      }
    }

    var setAllLeft = function() {
      angular.forEach($scope.books, function(book){
        book.templateUrl = templates[0];
      });
    }

    var setAllRight = function() {
      angular.forEach($scope.books, function(book){
        book.templateUrl = templates[1];
      });
    }

    $scope.options = {
      'Alternating' : setAlternatingTemplates,
      'All left' : setAllLeft,
      'All right': setAllRight
    }
    $scope.currentOption = setAlternatingTemplates;
    $scope.currentOption();
  })
  .filter('urlPrefix', function () {
    return function (input) {
      return '#!';
    }
  });
