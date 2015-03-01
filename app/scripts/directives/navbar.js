angular
	.module('homey')

	.directive('navbar', [function () {
		return {
			restrict: 'E', 
			controller: 'NavbarController',
			controllerAs: 'navbar',
			templateUrl: 'views/navbar.html'
		}
	}]);