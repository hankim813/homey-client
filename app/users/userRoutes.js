angular
	.module('homey')

	.config(function ($stateProvider) {

		$stateProvider

		.state('profile', {
      url: '/profile',
      resolve: {
        user: function (userFactory, userService) {
          return userFactory.saveUserToService();
        }
      },
      templateUrl: 'users/profile.html',
      controller: 'UserController',
      controllerAs: 'user'
    });
	})

