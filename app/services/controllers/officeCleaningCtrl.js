angular
	.module('homey')

	.controller('OfficeCleaningController', ['Neighborhoods', function (Neighborhoods) {
		var vm = this;

		vm.sqft 				= 0;
		vm.kitchen 			= true;
		vm.price			 	= 0;
		vm.neighborhood = 'Neighborhood';
		vm.hoods 				= Neighborhoods.list;

	}]);