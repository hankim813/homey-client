angular
	.module('homey')

	.directive('naviFooter', [function () {
		return {
			restrict: 'E',
			templateUrl: 'views/footer.html'
		}
	}]);