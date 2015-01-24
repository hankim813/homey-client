angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider

		.state('newAppointment.homeCleaning', {
			url: '/home-cleaning',
			views: {
				'homeCleaning': {
					templateUrl: 'bookings/services/home-cleaning.html',
					controller: 'HomeCleaningController',
					controllerAs: 'hc'
				}
			}
		})
	}]);