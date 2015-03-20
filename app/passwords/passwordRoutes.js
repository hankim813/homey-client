angular
  .module('homey')

  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider

    .state('request', {
      url: '/passwords/request',
      templateUrl: '/passwords/request.html',
      controller: 'PasswordController',
      controllerAs: 'password'
    })

    .state('update', {
      url: '/passwords/update',
      templateUrl: '/passwords/update.html',
      controller: 'PasswordController',
      controllerAs: 'password'
    })

    .state('complete', {
      url: '/passwords/complete',
      templateUrl: '/passwords/thanks.html',
      controller: 'PasswordController',
      controllerAs: 'password'
    });

  }]);