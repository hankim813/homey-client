angular
	.module('homey')

	.controller('AppointmentController', ['appointments', 'apptFactory', 'userService', 'upcomingApptsFilter', 'pastApptsFilter', function (appointments, apptFactory, userService, upcomingApptsFilter, pastApptsFilter) {
		var vm           = this;

		vm.user          = userService.user;
		vm.appointments  = appointments;
		vm.upcomingAppts = upcomingApptsFilter(vm.appointments);
		vm.pastAppts     = pastApptsFilter(vm.appointments);
		// vm.edit					= apptFactory.edit;
		vm.pay           = apptFactory.pay;
		vm.cancel        = apptFactory.cancel;
		vm.complete      = apptFactory.complete;
	}]);
