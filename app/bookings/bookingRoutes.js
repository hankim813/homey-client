angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider

		.state('newAppointment.homeCleaning', {
			url: '/home-cleaning',
			resolve: {
				serviceType: function () {
					return 'home-cleanings';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service': {
					templateUrl: 'bookings/services/home-cleaning.html',
					controller: 'HomeCleaningController',
					controllerAs: 'hc'
				}
			}
		})

		.state('newAppointment.officeCleaning', {
			url: '/office-cleaning',
			resolve: {
				serviceType: function () {
					return 'office-cleanings';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service': {
					templateUrl: 'bookings/services/office-cleaning.html',
					controller: 'OfficeCleaningController',
					controllerAs: 'oc'
				}
			}
		})

		.state('newAppointment.carWash', {
			url: '/car-wash',
			resolve: {
				serviceType: function () {
					return 'car-washes';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service': {
					templateUrl: 'bookings/services/car-wash.html',
					controller: 'CarWashController',
					controllerAs: 'car'
				}
			}
		})

		.state('newAppointment.driver', {
			url: '/driver',
			resolve: {
				serviceType: function () {
					return 'drivers';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service': {
					templateUrl: 'bookings/services/driver.html',
					controller: 'DriverController',
					controllerAs: 'driver'
				}
			}
		})

		.state('newAppointment.security', {
			url: '/security',
			resolve: {
				serviceType: function () {
					return 'securities';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service':  {
					templateUrl: 'bookings/services/security.html',
					controller: 'SecurityController',
					controllerAs: 'sc'
				}
			}
		})

		.state('newAppointment.chef', {
			url: '/chef',
			resolve: {
				serviceType: function () {
					return 'chefs';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service':  {
					templateUrl: 'bookings/services/chef.html',
					controller: 'ChefController',
					controllerAs: 'chef'
				}
			}
		})

		.state('newAppointment.gardening', {
			url: '/gardening',
			resolve: {
				serviceType: function () {
					return 'gardenings';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service':  {
					templateUrl: 'bookings/services/gardening.html',
					controller: 'GardeningController',
					controllerAs: 'gardening'
				}
			}
		})

		.state('newAppointment.contractor', {
			url: '/contractor',
			resolve: {
				serviceType: function () {
					return 'contractors';
				},

				addresses: function (addressService) {
					return addressService.addresses;
				}
			},
			views: {
				'service':  {
					templateUrl: 'bookings/services/contractor.html',
					controller: 'BookingController',
					controllerAs: 'book'
				}
			}
		});
	}]);