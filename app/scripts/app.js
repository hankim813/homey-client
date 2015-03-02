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
    'ui.router',
    'ngStorage',
    'ui.bootstrap.datetimepicker',
    'angularMoment'
  ])

  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/landing');

    // $locationProvider.html5Mode(true);

    $stateProvider

    .state('home', {
      url: '/landing',
      templateUrl: '/views/landing.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: '/views/main-login.html'
    })

    .state('forbidden', {
      url: '/noAccess',
      templateUrl: 'views/forbidden.html'
    });

  }])

  .run(['$rootScope', '$location', '$localStorage', 'AuthFactory', function ($rootScope, $location, $localStorage, AuthFactory) {
    var sp = $localStorage.spId;
    var user = $localStorage.userId;
    var admin = $localStorage.adminId;

    AuthFactory.check();

    if (AuthFactory.isLogged) {
      if (user) {$location.path('/dashboard');}
      if (sp) {$location.path('/sp/dashboard');}
      if (admin) {$location.path('/admin/dashboard');}
    } else {
      $location.path('/landing');
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      console.log('RUNNINNG', toState);
      if (AuthFactory.isLogged === true && user && (toState.url === '/login' || toState.url === '/register' || toState.url === '/landing')) {
        $location.path('/dashboard');
      } else if (AuthFactory.isLogged === true && sp && (toState.url === '/serviceProviders/login' || toState.url === '/serviceProviders/register' || toState.url === '/landing')) {
        $location.path('/sp/dashboard');
      } else if (AuthFactory.isLogged === true && admin && (toState.url === '/admin/login' || toState.url === '/admin/register' || toState.url === '/landing')) {
        $location.path('/admin/dashboard');
      } else if (AuthFactory.isLogged === false && toState.url === '/login') {
        console.log('this guy fucking shit up')
        $location.path('/login');
      } else if (AuthFactory.isLogged === false && toState.url === '/register') {
        console.log('in this bitch');
        $location.path('/register')
      } else if (AuthFactory.isLogged === false) {
        $location.path('/landing')
      }
    });
  }]);

