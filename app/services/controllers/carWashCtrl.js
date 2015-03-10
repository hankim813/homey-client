angular
	.module('homey')

	.controller('CarWashController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.number = 0;
		vm.water = true;
		vm.price = 0;
		vm.time = 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;
		vm.changeCarQty = changeCarQty;
		vm.toggleWater = toggleWater;
		vm.applyTransportFee = applyTransportFee;

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			calculateQuote();
		};

		function changeCarQty (type) {
			if (type === 0 && vm.number > 0) {
				vm.number--;
			} else if (type === 1) {
				vm.number++;
			} else {
				return
			}
			calculateQuote();
		};

		function toggleWater (type) {
			if (type === 0) {
				vm.water = false;
			} else {
				vm.water = true;
			}
			calculateQuote();
		};

		function calculateQuote () {
			vm.price = 0;
			vm.price += vm.number * 500;
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
			calculateTime();
		};

		function calculateTime () {
			vm.time = vm.number;
		};
	}]);