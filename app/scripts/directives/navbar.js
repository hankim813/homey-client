angular
	.module('homey')

	.directive('navbar', [function () {
		return {
			restrict: 'E', 
			templateUrl: 'views/navbar.html'
		}
	}]);