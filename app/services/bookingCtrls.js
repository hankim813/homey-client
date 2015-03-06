angular
	.module('homey')

	.controller('HomeCleaningController', [function () {
		var vm = this;

		vm.price 				= 1000;
		vm.bedrooms 		= 2;
		vm.bathrooms 		= 2;
		vm.kitchens 		= 1;
		vm.livingrooms 	= 1;
		vm.laundry 			= 0;
		vm.ironed 			= 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= [
			{id: 0, name: 'Kilimani'},
			{id: 1, name: 'Lavington'},
			{id: 2, name: 'Westlands'},
			{id: 3, name: 'CBD'},
			{id: 4, name: 'Upperhill'},
			{id: 5, name: 'Karen'},
			{id: 6, name: 'Runda'},
			{id: 7, name: 'Eastlands'}
		];

		vm.addRoom 			= addRoom;
		vm.removeRoom 	= removeRoom;
		vm.flatRate 		= flatRate;
		vm.applyTransportFee = applyTransportFee;

		function calculateNumberOfProviders () {
			return Math.ceil(vm.bedrooms / 3);
		};

		function applyTransportFee (hood) {
			vm.neighborhood = hood;
			if (vm.neighborhood === 'Karen' || vm.neighborhood === 'Runda' || vm.neighborhood === 'Eastlands') {
				vm.price += 250;
			}
		}

		function calculatePrice () {
			var providers = calculateNumberOfProviders();
			if (vm.bedrooms === 2 && vm.bathrooms === 2 && vm.kitchens === 1 && vm.livingrooms === 1) {
				vm.price = 1000;
				vm.price += vm.laundry * 350;
				vm.price += vm.ironed * 300;
				vm.price += (providers - 1) * 300;
			} else if (vm.bedrooms === 3 && vm.bathrooms === 3 && vm.kitchens === 1 && vm.livingrooms === 1) {
				vm.price = 1500;
				vm.price += vm.laundry * 350;
				vm.price += vm.ironed * 300;
				vm.price += (providers - 1) * 300;
			} else {
				vm.price = 0;
				vm.price += vm.bedrooms * 400;
				vm.price += vm.bathrooms * 400;
				vm.price += vm.kitchens * 300;
				vm.price += vm.livingrooms * 300;
				vm.price += vm.laundry * 350;
				vm.price += vm.ironed * 300;
				vm.price += (providers - 1) * 300;
			}
			applyTransportFee(vm.neighborhood);
		};

		function flatRate (id) {
			if (id === 0) {
				vm.bedrooms 		= 2;
				vm.bathrooms 		= 2;
				vm.kitchens 		= 1;
				vm.livingrooms 	= 1;
			} else {
				vm.bedrooms			= 3;
				vm.bathrooms 		= 3;
				vm.kitchens 		= 1;
				vm.livingrooms 	= 1;
			}
			calculatePrice();
		};

		function addRoom (type) {
			switch (type) {
				case 'bedrooms':
					vm.bedrooms++;
					break;
				case 'bathrooms': 
					vm.bathrooms++;
					break;
				case 'kitchens':
					vm.kitchens++;
					break;
				case 'livingrooms':
					vm.livingrooms++;
					break;
				case 'laundry': 
					vm.laundry++;
					break;
				case 'ironed':
					if (vm.ironed < vm.laundry) {
						vm.ironed++;
					} else if (vm.ironed > vm.laundry) {
						vm.ironed = Number(vm.laundry);
					}
					break;
			}
			calculatePrice();
		};

		function removeRoom (type) {
			switch (type) {
				case 'bedrooms':
					if (vm.bedrooms > 0) {
						vm.bedrooms--;
					}
					break;
				case 'bathrooms': 
					if (vm.bathrooms > 0) {
						vm.bathrooms--;
					}
					break;
				case 'kitchens':
					if (vm.kitchens > 0) {
						vm.kitchens--;
					}
					break;
				case 'livingrooms':
					if (vm.livingrooms > 0) {
						vm.livingrooms--;
					}
					break;
				case 'laundry': 
					if (vm.laundry > 0) {
						vm.laundry--;
					}
					break;
				case 'ironed':
					if (vm.ironed > 0) {
						vm.ironed--;
					}
					break;
			}
			calculatePrice();
		};
	}]);