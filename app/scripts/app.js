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
      resolve: {
        fetchUser: function (userFactory, userService, $localStorage) {
          return userService.user || userFactory.saveUserToService($localStorage.userId)
            .then(function (response) {
              return userService.user;
            }, function (error) {
              console.log(error);
            });
        },

        fetchAppointments: function (apptFactory, apptService, $localStorage) {
          return apptService.appointments || apptFactory.saveApptsToService($localStorage.userId)
            .then(function (resposne) {
              return apptService.appointments;
            }, function (error) {
              console.log(error);
            });
        }
      },
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })

    .state('spDashboard', {
      url: '/sp/dashboard',
      resolve: {
        // fetch data for sp and save it to service
      },
      templateUrl: 'serviceProviders/dashboard.html',
      controller: 'ServiceProviderController',
      controllerAs: 'sp'
    });

  }])

  .run(['$rootScope', '$location', 'AuthFactory', function ($rootScope, $location, AuthFactory) {

    AuthFactory.check();

    if (AuthFactory.isLogged) {
      $location.path('/home');
    } else {
      $location.path('/');
    };

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (AuthFactory.isLogged === true && (toState.url === '/login' || toState.url === '/register' || toState.url === '/')) {
        $location.path('/home');
      } else if (AuthFactory.isLogged === false) {
        $location.path('/');
      }
    })
  }]);

