angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider

		.state('newAppointment.homeCleaning', {
			url: '/home-cleaning',
			views: {
				'homeCleaning': {
					templateUrl: '/bookings/services/home-cleaning.html',
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
				}
			},
			views: {
				'officeCleaning': {
					templateUrl: 'bookings/services/office-cleaning.html',
					controller: 'BookingController',
					controllerAs: 'book'
				}
			}
		})

		.state('newAppointment.carWash', {
			url: '/car-wash',
			resolve: {
				serviceType: function () {
					return 'car-washes';
				}
			},
			views: {
				'carWash': {
					templateUrl: 'bookings/services/car-wash.html',
					controller: 'BookingController',
					controllerAs: 'book'
				}
			}
		});
	}]);