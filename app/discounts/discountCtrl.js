angular
	.module('homey')

	.controller('DiscountController', ['discountFactory', 'Middleware', function (discountFactory, Middleware) {

    Middleware.redirectToForbidden('admin');

		var vm = this;
		vm.submitData = submitData;

		function submitData () {
			discountFactory.generateDiscountCode(vm.formData);
		};
	}]);