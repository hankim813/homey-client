angular
	.module('homey')

	.controller('ChefController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.number 			= 0;
		vm.price			 	= 0;
		vm.time					= 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;
		vm.changeServingQty = changeServingQty;
		vm.applyTransportFee = applyTransportFee;

		function changeServingQty (type) {
			if (type === 0 && vm.number > 0) {
				vm.number--;
			} else if (type === 1) {
				vm.number++;
			} else {
				return
			}
			calculateQuote();
		};

		function calculateTime () {
			vm.time = 8;
		};

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			calculateQuote();
		};

		function calculateNumberOfProviders () {
			var providers;
			if (vm.number > 10) {
				providers = Math.ceil((vm.number - 10) / 10) + 1;
			} else {
				providers = 1;
			}
			return providers;
		};

		function calculateQuote () {
			var providers = calculateNumberOfProviders();
			vm.price = 1500;
			vm.price += (providers - 1) * 1200;
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
			calculateTime();
		};
	}]);