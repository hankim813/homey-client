angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider

		.state('homeCleaning', {
			url: '/services/home-cleaning',
			templateUrl: '/services/views/home-cleaning.html',
			controller: 'HomeCleaningController',
			controllerAs: 'hc'
		})

		.state('officeCleaning', {
			url: '/services/office-cleaning',
			templateUrl: '/services/views/office-cleaning.html',
			controller: 'OfficeCleaningController',
			controllerAs: 'oc'
		})

	}]);