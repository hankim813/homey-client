angular
	.module('homey')

	.controller('HomeCleaningController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z', // placeholder
			bedrooms: 0,
			bathrooms: 0,
			kitchens: 0,
			livingrooms: 0,
			loads: 0,
			ironed: 0
		};

		vm.laundry = false;
		vm.submitData = submitData;
		vm.showLaundry = showLaundry;
		vm.cancelLaundry = cancelLaundry;
		vm.flatRate = flatRate;

		function submitData () {
			calculateTimeRequired();
			calculateQuote();
			calculateProvidersRequired();
			bookingFactory.create(vm.formData, serviceType);
		};

		function showLaundry () {
			vm.laundry = true;
		};

		function cancelLaundry () {
			vm.laundry = false;
			delete vm.formData.loads
			delete vm.formData.ironed
		};

		function flatRate (type) {
			if (type === 1) {
				vm.formData.bedrooms 			= 2;
				vm.formData.bathrooms 		= 2;
				vm.formData.kitchens 			= 1;
				vm.formData.livingrooms 	= 1;
			} else if (type === 2) {
				vm.formData.bedrooms			= 3;
				vm.formData.bathrooms 		= 3;
				vm.formData.kitchens 			= 1;
				vm.formData.livingrooms 	= 1;
			}
		};

		function calculateProvidersRequired () {
			vm.formData.providers = Math.ceil(vm.formData.bedrooms / 3);
		};

		function calculateQuote () {
			var total = 0;

			if (vm.formData.bedrooms === 2 && vm.formData.bathrooms === 2 && vm.formData.kitchens === 1 && vm.formData.livingrooms === 1) {
				total = 800;
			} else if (vm.formData.bedrooms === 3 && vm.formData.bathrooms === 3 && vm.formData.kitchens === 1 && vm.formData.livingrooms === 1) {
				total = 800;
			} else {
				total += vm.formData.bedrooms * 300;
				total += vm.formData.bathrooms * 200;
				total += vm.formData.kitchens * 250;
				total += vm.formData.livingrooms * 250;
				total += vm.formData.loads * 350;
				total += vm.formData.ironed * 300;
			}

			return vm.formData.quote = total;
		};

		function calculateTimeRequired () {
			var total = 0;

			total += vm.formData.bedrooms * 0.50;
			total += vm.formData.bathrooms * 0.50;
			total += vm.formData.kitchens * 1.00;
			total += vm.formData.livingrooms * 0.50;
			total += vm.formData.loads * 4.00;
			total += vm.formData.ironed * 4.00;

			return vm.formData.time_required = total;
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
			serving_size: 0
		};

		vm.Math = $window.Math;

		function calculateChefNumber () {
			return vm.formData.providers = Math.ceil(vm.formData.serving_size / 10);
		};

		vm.submitData = function () {
			// Adds a chef per 10 people required to serve, minimum 1 chef.
			calculateChefNumber();

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
		};

		function calculateTimeRequired () {
			vm.formData.time_required = vm.formData.acres * 4.00;
		};

		function calculateGardenersRequired () {
			vm.formData.providers = Math.ceil((vm.formData.acres / 1.0));
		}

		vm.addService = function (index) {
			vm.formData.type += (vm.services[index].name + ', '); 
			vm.services[index].checked = true;
		};

		vm.submitData = function () {
			pruneType();
			calculateGardenersRequired();
			calculateTimeRequired();
			bookingFactory.create(vm.formData, serviceType);
		};
	}])

	.controller('BookingController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.services = [
			{name: 'Home Cleaning', state: 'newAppointment.homeCleaning'},
			{name: 'Office Cleaning', state: 'newAppointment.officeCleaning'},
			{name: 'Car Wash', state: 'newAppointment.carWash'},
			{name: 'Driver', state: 'newAppointment.driver'},
			{name: 'Security', state: 'newAppointment.security'},
			{name: 'Personal Chef', state: 'newAppointment.chef'},
			{name: 'Gardening', state: 'newAppointment.gardening'},
			{name: 'Contractor Job', state: 'newAppointment.contractor'},
		];

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z' // placeholder
		};

		vm.submitData = function () {
			calculateProvidersRequired();
			bookingFactory.create(vm.formData, serviceType);
		};

		function calculateProvidersRequired () {
			switch (serviceType) {
				case 'office-cleanings':
					vm.formData.providers = Math.ceil(vm.formData.sqft / 500);
					break;
				case 'car-washes':
					vm.formData.providers = vm.formData.cars;
					break;
				case 'contractors':
					vm.formData.providers = 1;
					break;
			}
		};

	}]);





