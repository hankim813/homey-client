'use strict';

/**
 * @ngdoc overview
 * @name homey
 * @description
 * # homey
 *
 * Main module of the application.
 */
angular
  .module('homey', [
    'ngAnimate',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise('/');

  	$stateProvider 

  	.state('/', {
	  	url: '/',
	  	templateUrl: 'views/main.html',
	  	controller: 'MainCtrl',
	  	controllerAs: 'app'
	  });
  });

  
