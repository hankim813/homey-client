angular
	.module('homey')

	.controller('OfficeCleaningController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.sqft 				= 0;
		vm.kitchen 			= true;
		vm.price			 	= 0;
		vm.time					= 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;
		vm.changeFt 		= changeFt;
		vm.applyTransportFee = applyTransportFee;
		vm.toggleKitchen = toggleKitchen;

		function changeFt (type) {
			if (type === 0 && vm.sqft > 0) {
				vm.sqft -= 100;
			} else if (type === 1) {
				vm.sqft += 100;
			} else {
				return;
			}
			calculateQuote();
		};

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
		};

		function calculateNumberOfProviders () {
			return Math.ceil((vm.sqft - 500) / 1000) + 1;
		};

		function calculateQuote () {
			var providers = calculateNumberOfProviders();
			vm.price = 0;
			vm.price += vm.sqft * 2;
			if (vm.kitchen) { vm.price += 300 }
			vm.price += (providers - 1) * 400;
			applyTransportFee(vm.neighborhood);
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