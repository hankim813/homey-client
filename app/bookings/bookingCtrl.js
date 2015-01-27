angular
	.module('homey')

	.controller('HomeCleaningController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};
		vm.laundry = false;

		vm.submitData = function () {
			// vm.formData.time_required = calculate
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
		};

		vm.removeCar = function (index) {
			vm.formData.cars.splice(index, 1);
			vm.formData.providers = vm.formData.cars.length;
		};

		vm.submitData = function () {
			bookingFactory.create(vm.formData, serviceType);
		};
	}])

	.controller('SecurityController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z',
			guards: []
		};

		vm.ifGuards = false;

		function findMax () {
			var max = 0;

			for (var i = 0; i < vm.formData.guards.length; i++) {
				if (vm.formData.guards[i].hours_required > max) {
					max = vm.formData.guards[i].hours_required;
				}
			}
			return max;
		}

		vm.addGuards = function	() {
			for (var i = 0; i < vm.formData.providers; i++) {
				vm.formData.guards.push({})
			}
			vm.ifGuards = true;
		};

		vm.removeGuard = function(index) {
			vm.formData.guards.splice(index, 1);
			vm.formData.providers = vm.formData.guards.length;
		};

		vm.submitData = function () {
			// set the booking's overall time required as the highest required number of hours for a request guard
			vm.formData.time_required = findMax();
			bookingFactory.create(vm.formData, serviceType);
		};
	}])

	.controller('ChefController', ['bookingFactory', 'serviceType', '$window', function (bookingFactory, serviceType, $window) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z', // placeholder
			time_required: 8,
			providers: 1,
			serving_size: 0
		};

		vm.Math = $window.Math;

		function calculateChefNumber () {
			return vm.needed = Math.ceil((vm.formData.serving_size / 10));
		};

		vm.submitData = function () {
			// Adds a chef per 10 people required to serve, minimum 1 chef.
			if (calculateChefNumber() > 1) {
				vm.formData.providers = vm.needed;
			}

			bookingFactory.create(vm.formData, serviceType);
		};
	}])

	.controller('GardeningController', ['bookingFactory', 'serviceType', '$window', function (bookingFactory, serviceType, $window) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z', // placeholder
			acres: 0.0,
			type: ''
		};

		vm.Math = $window.Math;

		vm.services = [
			{name: 'Grass Cutting', checked: false},
			{name:'Hedge Trimming', checked: false},
			{name:'Pruning', checked: false}, 
			{name:'Plant Watering', checked: false}, 
			{name:'Other (Please specify in notes)', checked: false}
		];

		function pruneType () {
			vm.formData.type = vm.formData.type.trim();
			if (vm.formData.type.slice(-1) === ',') {
				return vm.formData.type = vm.formData.type.slice(0,-1);
			}
		}

		vm.addService = function (index) {
			vm.formData.type += (vm.services[index].name + ', '); 
			vm.services[index].checked = true;
		};

		vm.submitData = function () {
			vm.formData.time_required = vm.formData.acres * 4.00;
			vm.formData.providers = Math.ceil(vm.formData.acres / 1.0);
			pruneType();
			bookingFactory.create(vm.formData, serviceType);
		}
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





