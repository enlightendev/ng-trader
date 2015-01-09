'use strict';

/**
 * @ngdoc overview
 * @name meanTraderApp
 * @description
 * # meanTraderApp
 *
 * Main module of the application.
 */
angular
  .module('meanTraderApp', [
    'ngResource','ui.router','smart-table'
  ])

  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('trade', {
        url: '/trade/{id}',
        templateUrl: 'views/trade.html',
        controller: 'TradeCtrl'
      })
    ;

    $urlRouterProvider.otherwise('home');

  }]);
