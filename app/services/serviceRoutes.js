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

		.state('carWash', {
			url: '/services/car-wash',
			templateUrl: '/services/views/car-wash.html',
			controller: 'CarWashController',
			controllerAs: 'cw'
		})

		.state('chef', {
			url: '/services/personal-chef',
			templateUrl: '/services/views/personal-chef.html',
			controller: 'ChefController', 
			controllerAs: 'chef'
		})

		.state('painting', {
			url: '/services/painting',
			templateUrl: '/services/views/painting.html'
		})

		.state('electric', {
			url: '/services/electrical',
			templateUrl: '/services/views/electric.html'
		})

		.state('plumbing', {
			url: '/services/plumbing',
			templateUrl: '/services/views/plumbing.html'
		})

		.state('mechanical', {
			url: '/services/mechanical',
			templateUrl: '/services/views/mechanical.html'
		})

		.state('contractor', {
			url: '/services/contractor',
			templateUrl: '/services/views/contractor.html'
		})

		.state('driver', {
			url: '/services/chauffeur',
			templateUrl: '/services/views/driver.html',
			controller: 'DriverController',
			controllerAs: 'cf'
		})

		.state('security', {
			ulr: '/services/security',
			templateUrl: '/services/views/security.html',
			controller: 'SecurityController',
			controllerAs: 'sc'
		})
	}]);