angular	
	.module('homey')

	.controller('AppointmentController', ['appointments', 'apptFactory', 'userService', function (appointments, apptFactory, userService) {
		var vm 					= this;

		vm.user 				= userService.user;
		vm.appointments = appointments;
		// vm.edit					= apptFactory.edit;
		vm.pay					= apptFactory.pay;
		vm.cancel				= apptFactory.cancel;
		vm.complete			= apptFactory.complete;
	}])

	.controller('NewAppointmentController', ['apptFactory', 'userService', function (apptFactory, userService) {
		var vm 					= this;

		vm.user 				= userService.user;
		vm.book					= apptFactory.book;
	}]);
