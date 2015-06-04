'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('BookDetailController', function ($scope, $location, booksService, $routeParams) {
    $scope.pageClass = 'detail-view';
    $scope.book = booksService.getById(parseInt($routeParams.id, 10)); // Les Miserables
    $scope.selectedText = $location.search()['highlight'] ?
      decodeURIComponent($location.search()['highlight']) :
      null;

    $scope.getSelection = function () {
      var selected = window.getSelection().toString();
      $location.search('highlight', encodeURIComponent(selected));
      $scope.selectedText = selected;
    };
  })

  .filter('highlight', function () {
    return function (input, highlight) {
      if (!highlight) {
        return input;
      }
      return input.replace(highlight,
        '<span class="highlight">' + highlight + '</span>');
    }
  });


