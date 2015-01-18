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
    'ngStorage'
  ])

  .factory('AuthInterceptor', ['$q', '$injector', function ($q, $injector) {
    return {
      request: function(config) {
        var AuthToken = $injector.get("AuthToken");
        var token = AuthToken.get();
        config.headers = config.headers || {};
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
        return config || $q.when(config);
      }
    };
  }])

  .factory('AuthFactory', ['$localStorage', function ($localStorage) {
    var auth = {

      isLogged: false,

      check: function() {
        if ($localStorage.token && $localStorage.userId) {
          console.log("logged in");
          this.isLogged = true;
        } else {
          console.log("logged out");
          this.isLogged = false;
          delete $localStorage.token;
          delete $localStorage.userId;
        }
      }
    };

    return auth;
  }])

  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/');

    $stateProvider 

    .state('/', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainController',
      controllerAs: 'app'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

  }])

  .run(['$rootScope', '$location', 'AuthFactory', function ($rootScope, $location, AuthFactory) {
    console.log('RUN BLOCK RUNNING');
    AuthFactory.check();

    if (AuthFactory.isLogged) {
      console.log("IN AUTHFACTORY SUCCESS");
      $location.path('/home');
    } else {
      console.log("IN AUTHFACTORY fail")
      $location.path('/');
    };

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      console.log('RUNNING stateChangeStart');
      if (AuthFactory.isLogged === true && (toState.url === '/login' || toState.url === '/register' || toState.url === '/')) {
        console.log('scs, success')
        $location.path('/home');
      }
    })
  }]);
  
