angular
	.module('homey')

	.controller('SecurityController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

				vm.guards 			= 0;
				vm.price			 	= 0;
				vm.time					= 0;
				vm.neighborhood = 'Neighborhood';
				vm.hoods 				= Neighborhoods.list;
				vm.ifGuards 			= false;
				vm.addGuards 			= addGuards;
				vm.removeGuard  	= removeGuard;
				vm.changeGuardQty = changeGuardQty;
				vm.formData			= {
					guards: []
				};
				vm.setType = setType;
				vm.applyTransportFee = applyTransportFee;

				function applyTransportFee (hood) {
					vm.neighborhood = hood;
					calculateQuote();
				};

				function calculateQuote () {
					vm.price = 0;
					for (var i = 0; i < vm.formData.guards.length; i++) {
						var guard = vm.formData.guards[i];
						if (guard.type === 0) {
							vm.price += 1500;
							if (guard.hours) {
								vm.price += ((Math.ceil(guard.hours / 12) - 1) * 1500);
							}
						} else {
							vm.price += 3000;
							if (guard.hours) {
								vm.price += ((Math.ceil(guard.hours / 12) - 1) * 3000);
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
					for (var i = 0; i < vm.formData.guards.length; i++) {
						if (vm.formData.guards[i].hours) {
							vm.time += +vm.formData.guards[i].hours;
						}
					}
				};

				function changeGuardQty (type) {
					if (type === 0 && vm.guards > 0) {
						vm.guards--;
					} else if (type === 1) {
						vm.guards++;
					} else {
						return
					}
				};

				function addGuards () {
					var previousGuards = vm.formData.guards.length;
					(function (x) {
						for (var i = 0; i < (vm.guards - x); i++) {
							vm.formData.guards.push({
								type: 0,
								typeVm: false,
							})
						}
					})(previousGuards);
					
					if (vm.guards) { vm.ifGuards = true; }
				};

				function removeGuard (index) {
					vm.formData.guards.splice(index, 1);
					vm.guards = vm.formData.guards.length;
					if (vm.guards === 0) {
						vm.ifGuards = false;
					}
					calculateQuote();
				};

				function setType (index, type, val) {
					var guard = vm.formData.guards[index];
					switch (type) {
						case 'guard':
							if (val === 1) {
								guard.typeVm = true;
							} else {
								guard.typeVm = false;
							}
							guard.type = val;
						break;
		 			}
		 			calculateQuote();
				};
	}]);