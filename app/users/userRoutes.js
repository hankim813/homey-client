angular
	.module('homey')

	.config(function ($stateProvider) {

		$stateProvider

		.state('profile', {
      url: '/profile',
      resolve: {
        user: function (userFactory, userService, $localStorage) {
          return userFactory.saveUserToService($localStorage.userId);
        }
      },
      templateUrl: 'users/profile.html',
      controller: 'UserController',
      controllerAs: 'user'
    })

    .state('edit', {
      url: '/edit',
      resolve: {
        user: function (userFactory, userService, $localStorage) {
          return userFactory.saveUserToService($localStorage.userId);
        }
      },
      templateUrl: 'users/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    });
	})

