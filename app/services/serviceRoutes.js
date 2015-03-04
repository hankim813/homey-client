angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

		.state('homeCleaning', {
			url: '/services/home-cleaning',
			templateUrl: '/services/views/home-cleaning.html'
		})
	}]);