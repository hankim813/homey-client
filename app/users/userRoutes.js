angular
	.module('homey')

	.config(function ($stateProvider) {

		$stateProvider

    .state('bookServices', {
      url: '/book/services',
      templateUrl: '/bookings/services.html'
    })

    .state('userDashboard', {
      url: '/dashboard',
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
      templateUrl: '/views/home.html'
      // controller: 'UserDashboardController',
      // controllerAs: 'userDB'
    })

    .state('userSettings', {
      url: '/users/settings',
      templateUrl: 'users/settings.html'
    })

		.state('profile', {
      url: '/profile',
      resolve: {
        user: function (userService) {
          return userService.user;
        }
      },
      templateUrl: '/users/profile.html',
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
      templateUrl: '/users/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    });
	})

