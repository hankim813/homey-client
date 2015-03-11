angular
	.module('homey')

	.controller('GardeningController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.acres = 0.0;
		vm.price = 0;
		vm.time = 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;
		vm.changeAcres = changeAcres;
		vm.applyTransportFee = applyTransportFee;

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			calculateQuote();
		};

		function changeAcres (type) {
			if (type === 0 && vm.acres > 0) {
				vm.acres += 0.5;
			} else if (type === 1) {
				vm.acres += 0.5;
			} else {
				return
			}
			calculateQuote();
		};

		function calculateQuote () {
			vm.price = 0;
			vm.price += vm.acres * 750;
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
			vm.price = vm.price.toFixed(2);
			calculateTime();
		};

		function calculateTime () {
			vm.time = (vm.acres * 4).toFixed(1);
		};
	}]);