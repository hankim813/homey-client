angular
	.module('homey')

	.controller('DiscountController', ['$localStorage', 'discountFactory', function ($localStorage, discountFactory) {
		var vm = this;
		vm.formData = {
			admin_id: $localStorage.adminId
		};
		vm.submitData = submitData;

		function submitData () {
			discountFactory.generateDiscountCode(vm.formData);
		}
	}]);