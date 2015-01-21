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
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

  }])

  .run(['$rootScope', '$location', 'AuthFactory', function ($rootScope, $location, AuthFactory) {

    // FB Login Initialize
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '836908086372942',
        xfbml      : true,
        version    : 'v2.2'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

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
  
