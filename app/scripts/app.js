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

    // $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('landing', {
      url: '/',
      templateUrl: '/views/landing.html'
    })

    .state('services', {
      url: '/services',
      templateUrl: '/views/services.html',
      controller: 'ServiceController',
      controllerAs: 'service'
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

  .run(['$rootScope', '$location', '$localStorage', '$state', function ($rootScope, $location, $localStorage, $state) {
  //   var sp = $localStorage.spId;
  //   var user = $localStorage.userId;
  //   var admin = $localStorage.adminId;

  //   AuthFactory.check();

  //   if (AuthFactory.isLogged) {
  //     if (user) {$location.path('/dashboard');}
  //     if (sp) {$location.path('/sp/dashboard');}
  //     if (admin) {$location.path('/admins/dashboard/upcoming');}
  //   } else {
  //     $location.path('/landing');
  //   }

  //   var whitelist = ['admins/login', 'users/login', 'users/register', 'service-providers/login', 'service-providers/register', 'about', 'services', 'faq', 'contact', 'thankyou', 'terms', 'services/home-cleaning'];

  //   $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

  //     if (AuthFactory.isLogged === true && user && (toState.url === '/users/login' || toState.url === '/users/register' || toState.url === '/admins/login' || toState.url === '/service-providers/register' || toState.url === '/service-providers/login' || toState.url === '/landing')) {
  //       event.preventDefault();
  //       $rootScope.$evalAsync(function() {
  //         $location.path('/dashboard').replace();
  //       });

  //     } else if (AuthFactory.isLogged === true && sp && (toState.url === '/service-providers/login' || toState.url === '/service-providers/register' || toState.url === '/users/login' || toState.url === '/users/register' || toState.url === '/admins/login' || toState.url === '/landing')) {
  //       event.preventDefault();
  //       $rootScope.$evalAsync(function() {
  //         $location.path('/sp/dashboard').replace();
  //       });

  //     } else if (AuthFactory.isLogged === true && admin && (toState.url === '/admins/login' || toState.url === '/landing' || toState.url === '/users/login' || toState.url === '/users/register' || toState.url === '/service-providers/login' || toState.url === '/service-providers/register')) {
  //       event.preventDefault();
  //       $rootScope.$evalAsync(function() {
  //         $location.path('/admins/dashboard/upcoming').replace();
  //       });

  //     } else if (AuthFactory.isLogged === false && (whitelist.indexOf('/' + toState.url) === 1)) {
  //       event.preventDefault();
  //       $rootScope.$evalAsync(function() {
  //         $location.path('/landing').replace();
  //       });
        
  //     } else {
  //       return;
  //     }
  //   });
    
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }]);

