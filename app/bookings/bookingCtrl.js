angular
	.module('homey')

	.controller('HomeCleaningController', ['bookingFactory', function (bookingFactory) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};
		vm.laundry = false;

		vm.submitData = function () {
			bookingFactory.create(vm.formData, 'homeCleanings');
		};

		vm.showLaundry = function () {
			vm.laundry = true;
		};

		vm.cancelLaundry = function () {
			vm.laundry = false;
			delete vm.formData.loads
			delete vm.formData.ironed
		};

	}])

	.controller('OfficeCleaningController', ['bookingFactory', function (bookingFactory) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};

		vm.submitData = function () {
			console.log('formData', vm.formData);
			bookingFactory.create(vm.formData, 'officeCleanings');
		};
	}]);