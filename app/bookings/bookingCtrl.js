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
		vm.flatRate = flatRate;
		vm.showLaundry = showLaundry;
		vm.cancelLaundry = cancelLaundry;
		vm.serviceType = serviceType;
		vm.submitData = bookingFactory.create;

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
	}])

	.controller('OfficeCleaningController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z',
		};

		vm.serviceType = serviceType;
		vm.submitData = bookingFactory.create;

	}])

	.controller('CarWashController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z'
		};

		vm.serviceType = serviceType;
		vm.submitData = bookingFactory.create;

	}])

	.controller('DriverController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z',
			cars: []
		};

		vm.ifCars = false;
		vm.addCars = addCars;
		vm.removeCar = removeCar;
		vm.serviceType = serviceType;
		vm.submitData = bookingFactory.create;

		function addCars () {
			for (var i = 0; i < vm.formData.providers; i++) {
				vm.formData.cars.push({})
			}
			vm.ifCars = true;
		};

		function removeCar (index) {
			vm.formData.cars.splice(index, 1);
			vm.formData.providers = vm.formData.cars.length;
		};

	}])

	.controller('SecurityController', ['bookingFactory', 'serviceType', function (bookingFactory, serviceType) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z',
			guards: []
		};

		vm.ifGuards = false;
		vm.serviceType = serviceType;
		vm.addGuards = addGuards;
		vm.removeGuard = removeGuard;
		vm.submitData = bookingFactory.create;

		function addGuards	() {
			for (var i = 0; i < vm.formData.providers; i++) {
				vm.formData.guards.push({})
			}
			vm.ifGuards = true;
		};

		function removeGuard (index) {
			vm.formData.guards.splice(index, 1);
			vm.formData.providers = vm.formData.guards.length;
		};
	}])

	.controller('ChefController', ['bookingFactory', 'serviceType', '$window', function (bookingFactory, serviceType, $window) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z', // placeholder
			serving_size: 0
		};

		vm.Math = $window.Math;
		vm.serviceType = serviceType;
		vm.submitData = bookingFactory.create;
	}])

	.controller('GardeningController', ['bookingFactory', 'serviceType', '$window', function (bookingFactory, serviceType, $window) {
		var vm = this;

		vm.formData = {
			serviceDate: '1990-12-31T23:59:60Z', // placeholder
			acres: 0.00,
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

		vm.submitData = submitData;
		vm.addService = addService;

		function pruneType () {
			vm.formData.type = vm.formData.type.trim();
			if (vm.formData.type.slice(-1) === ',') {
				return vm.formData.type = vm.formData.type.slice(0,-1);
			}
		};

		function addService (index) {
			vm.formData.type += (vm.services[index].name + ', '); 
			vm.services[index].checked = true;
		};

		function submitData () {
			pruneType();
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
			bookingFactory.create(vm.formData, serviceType);
		};

	}]);





