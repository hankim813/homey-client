angular
	.module('homey')

	.controller('HomeCleaningController', ['bookingFactory', function (bookingFactory) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};
		vm.laundry = false;

		vm.submitData = function () {
			bookingFactory.create(vm.formData, 'home-cleanings');
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

	.controller('BookingController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};

		vm.submitData = function () {
			bookingFactory.create(vm.formData, serviceType);
		};
	}]);