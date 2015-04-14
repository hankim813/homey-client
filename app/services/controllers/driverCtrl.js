angular	
	.module('homey')

	.controller('DriverController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.drivers 			= 0;
		vm.price			 	= 0;
		vm.time					= 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;
		vm.ifCars 			= false;
		vm.addCars 			= addCars;
		vm.removeCar  	= removeCar;
		vm.changeDriverQty = changeDriverQty;
		vm.formData			= {
			cars: []
		};
		vm.setType = setType;
		vm.applyTransportFee = applyTransportFee;

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			calculateQuote();
		};

		function calculateQuote () {
			vm.price = 0;
			for (var i = 0; i < vm.formData.cars.length; i++) {
				var car = vm.formData.cars[i];
				if (car.day_or_night === 0) { 
					vm.price += 200; 
				}
				if (car.owned === false) {
					if (car.wheel_type === 0) { 
						vm.price += 3500;
					} else {
						vm.price += 7000;
					}
				}
				if (car.hours) {
					if (car.hours >= 12) {
						vm.price += (car.hours - 12) * 300 + 1700;
					} else {
						vm.price += car.hours * 300;
					}
				}
			}
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
			calculateTime();
		};

		function calculateTime () {
			vm.time = 0;
			for (var i = 0; i < vm.formData.cars.length; i++) {
				if (vm.formData.cars[i].hours) {
					vm.time += +vm.formData.cars[i].hours;
				}
			}
		};

		function changeDriverQty (type) {
			if (type === 0 && vm.drivers > 0) {
				vm.drivers--;
			} else if (type === 1) {
				vm.drivers++;
			} else {
				return
			}
		};

		function addCars () {
			var previousCars = vm.formData.cars.length;
			(function (x) {
				for (var i = 0; i < (vm.drivers - x); i++) {
					vm.formData.cars.push({
						wheel_type: 0,
						owned: true,
						chosenWheelVm: false,
						ownedVm: true,
						drivingTimeVm: true
					})
				}
			})(previousCars);
			
			if (vm.drivers) { vm.ifCars = true; }
		};

		function removeCar (index) {
			vm.formData.cars.splice(index, 1);
			vm.drivers = vm.formData.cars.length;
			if (vm.drivers === 0) {
				vm.ifCars = false;
			}
			calculateQuote();
		};

		function setType (index, type, val) {
			var car = vm.formData.cars[index];
			switch (type) {
				case 'wheel':
					if (val === 1) {
						car.chosenWheelVm = true;
					} else {
						car.chosenWheelVm = false;
					}
					car.wheel_type = val;
				break;
				case 'ownership':
					if (val === true) {
						car.ownedVm = true;
					} else {
						car.ownedVm = false;
					}
					car.owned = val;
				break;
				case 'time':
					if (val === 1) {
						car.drivingTimeVm = true;
					} else {
						car.drivingTimeVm = false;
					}
					car.day_or_night = val;	
				break;
 			}
 			calculateQuote();
		};

	}]);