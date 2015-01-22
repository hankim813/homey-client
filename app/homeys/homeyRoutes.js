angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('homey_profile', {
      url: '/homey_profile',
      // resolve: {
      //   user: function (userFactory, userService, $localStorage) {
      //     return userFactory.saveUserToService($localStorage.userId);
      //   }
      // },
      templateUrl: 'homeys/profile.html',
      controller: 'HomeyController',
      controllerAs: 'homey'
    })

    .state('homey_edit', {
      url: '/homey_edit',
      // resolve: {
      //   user: function (userFactory, userService, $localStorage) {
      //     return userFactory.saveUserToService($localStorage.userId);
      //   }
      // },
      templateUrl: 'homeys/edit.html',
      controller: 'HomeyEditController',
      controllerAs: 'homey_edit'
    });
  })