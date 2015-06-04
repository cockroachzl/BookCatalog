'use strict';

/**
 * @ngdoc overview
 * @name bookCatalogApp
 * @description
 * # bookCatalogApp
 *
 * Main module of the application.
 */
angular
  .module('bookCatalogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BooksController'
      })
      .when('/book/:id', {
        templateUrl: 'views/about.html',
        controller: 'BookDetailController',
        reloadOnSearch : false
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(false).hashPrefix('!');
  });
