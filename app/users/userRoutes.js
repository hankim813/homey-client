angular
	.module('homey')

	.config(function ($stateProvider) {

		$stateProvider

		.state('profile', {
      url: '/profile',
      resolve: {
        user: function (userService) {
          return userService.user;
        }
      },
      templateUrl: '/app/users/profile.html',
      controller: 'UserController',
      controllerAs: 'user'
    })

    .state('edit', {
      url: '/edit',
      resolve: {
        user: function (userService) {
          return userService.user;
        }
      },
      templateUrl: '/app/users/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    });
	})

