angular
	.module('homey')

	.controller('DiscountController', ['discountFactory', function (discountFactory) {
		var vm = this;
		vm.submitData = submitData;

		function submitData () {
			discountFactory.generateDiscountCode(vm.formData);
		};
	}]);