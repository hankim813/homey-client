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

  .factory('Router', ['$state', function ($state) {
    return {
      redirectToForbidden: function() {
        return $state.go('forbidden')
      }
    }
  }])

  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('/', {
      url: '/',
      templateUrl: '/views/main.html',
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
            .then(function (response) {
              return apptService.appointments;
            }, function (error) {
              console.log(error);
            });
        },

        fetchAddresses: function (addressFactory, addressService, $localStorage) {
          return addressService.addresses || addressFactory.saveAddressesToService($localStorage.userId)
            .then(function (response) {
              return addressService.addresses;
            }, function (error) {
              console.log(error);
            });
        }
      },
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
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
      if (user) {$location.path('/home');}
      if (sp) {$location.path('/sp/dashboard');}
      if (admin) {$location.path('/admin/dashboard');}
    } else {
      $location.path('/');
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (AuthFactory.isLogged === true && user && (toState.url === '/login' || toState.url === '/register' || toState.url === '/')) {
        $location.path('/home');
      } else if (AuthFactory.isLogged === true && sp && (toState.url === '/serviceProviders/login' || toState.url === '/serviceProviders/register' || toState.url === '/')) {
        $location.path('/sp/dashboard');
      } else if (AuthFactory.isLogged === true && admin && (toState.url === '/admin/login' || toState.url === '/admin/register' || toState.url === '/')) {
        $location.path('/admin/dashboard');
      } else if (AuthFactory.isLogged === false) {
        $location.path('/');
      }
    });
  }]);

