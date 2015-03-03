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

    .state('landing', {
      url: '/landing',
      templateUrl: '/views/landing.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: '/views/main-login.html',
      controller: 'UserLoginController',
      controllerAs: 'userAuth'
    })

    .state('faq', {
      url: '/faq',
      templateUrl: '/views/faq.html',
      controller: 'FaqController',
      controllerAs: 'faq'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: '/views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })

    .state('thankyou', {
      url: '/thankyou',
      templateUrl: '/views/thankyou.html'
    })

    .state('terms', {
      url: '/terms',
      templateUrl: '/views/terms.html'
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
      if (AuthFactory.isLogged === true && user && (toState.url === '/login' || toState.url === '/register' || toState.url === '/landing')) {

        $rootScope.$evalAsync(function() {
          $location.path('/dashboard').replace();
        });

      } else if (AuthFactory.isLogged === true && sp && (toState.url === '/serviceProviders/login' || toState.url === '/serviceProviders/register' || toState.url === '/landing')) {

        $rootScope.$evalAsync(function() {
          $location.path('/sp/dashboard').replace();
        });

      } else if (AuthFactory.isLogged === true && admin && (toState.url === '/admin/login' || toState.url === '/admin/register' || toState.url === '/landing')) {

        $rootScope.$evalAsync(function() {
          $location.path('/admin/dashboard').replace();
        });

      } else if (AuthFactory.isLogged === false && toState.url === '/login') {

        $rootScope.$evalAsync(function() {
          $location.path('/login').replace();
        });

      } else if (AuthFactory.isLogged === false && toState.url === '/register') {

        $rootScope.$evalAsync(function() {
          $location.path('/register').replace();
        });

      } else if (AuthFactory.isLogged === false && toState.url === '/faq') {

        $rootScope.$evalAsync(function() {
          $location.path('/faq').replace();
        });
        
      } else if (AuthFactory.isLogged === false && toState.url === '/contact') {

        $rootScope.$evalAsync(function() {
          $location.path('/contact').replace();
        });
        
      } else if (AuthFactory.isLogged === false && toState.url === '/thankyou') {

        $rootScope.$evalAsync(function() {
          $location.path('/thankyou').replace();
        });
        
      } else if (AuthFactory.isLogged === false && toState.url === '/terms') {
        console.log('FUC YOU')
        $rootScope.$evalAsync(function() {
          $location.path('/terms').replace();
        });
        
      } else if (AuthFactory.isLogged === false) {

        $rootScope.$evalAsync(function() {
          $location.path('/landing').replace();
        });
        
      } else {
        return;
      }
    });
    
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }]);

