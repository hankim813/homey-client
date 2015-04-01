angular
	.module('homey')

	.controller('OfficeCleaningController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.sqft 				= 500;
		vm.kitchen 			= false;
		vm.price			 	= 1000;
		vm.time					= 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;
		vm.changeFt 		= changeFt;
		vm.applyTransportFee = applyTransportFee;
		vm.toggleKitchen = toggleKitchen;

		function changeFt (type) {
			if (type === 0 && vm.sqft > 500) {
				vm.sqft -= 500;
			} else if (type === 1) {
				vm.sqft += 500;
			} else {
				return;
			}
			calculateQuote();
		};

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			calculateQuote();
		};

		function calculateNumberOfProviders () {
			var providers;
			if (vm.sqft > 500) {
				providers = Math.ceil((vm.sqft - 500) / 1000) + 1;
			} else {
				providers = 1;
			}
			return providers;
		};

		function calculateQuote () {
			var providers = calculateNumberOfProviders();
			vm.price = 1000;
			vm.price += (vm.sqft - 500);
			if (vm.kitchen) { vm.price += 300 }
			vm.price += (providers - 1) * 400;
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
			calculateTime();
		};

		function calculateTime () {
			vm.time = vm.sqft / 250;
		};

		function toggleKitchen (n) {
			if (n === 0) {
				vm.kitchen = false;
			} else {
				vm.kitchen = true;
			}
			calculateQuote();
		};

	}]);