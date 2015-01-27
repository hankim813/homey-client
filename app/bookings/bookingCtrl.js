angular
	.module('homey')

	.controller('HomeCleaningController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};
		vm.laundry = false;

		vm.submitData = function () {
			bookingFactory.create(vm.formData, serviceType);
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

	.controller('DriverController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z',
			cars: []
		};

		vm.ifCars = false;

		vm.addCars = function () {
			for (var i = 0; i < vm.formData.providers; i++) {
				vm.formData.cars.push({})
			}
			vm.ifCars = true;
			console.log('cars', vm.formData.cars);
		};

		vm.removeCar = function (index) {
			vm.formData.cars.splice(index, 1);
			vm.formData.providers = vm.formData.cars.length;
		};

		vm.submitData = function () {
			bookingFactory.create(vm.formData, serviceType);
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