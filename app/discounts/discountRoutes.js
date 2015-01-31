angular
	.module('homey')

	.config(function ($stateProvider) {

		$stateProvider

		.state('discounts', {
			url: '/discounts',
			templateUrl: 'discounts/new.html',
			controller: 'DiscountController',
			controllerAs: 'dc'
		});
	})