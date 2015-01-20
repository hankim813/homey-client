angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('edit', {
      url: '/edit',
      resolve: {
        user: function (userFactory, userService) {
          return userFactory.saveUserToService();
        }
      },
      templateUrl: 'edit_profile/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    });
  })
