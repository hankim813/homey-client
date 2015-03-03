angular
	.module('homey')

	.controller('AppointmentController', ['$filter','appointments', 'apptFactory', 'userService', 'Middleware', function ($filter,appointments, apptFactory, userService, Middleware) {

		Middleware.redirectToForbidden('user');

		var vm           = this;
		//user appointments
		vm.user          = userService.user;
		vm.appointments  = appointments;
		console.log(vm.appointments);
		vm.upcoming      = $filter('upcomingFilter')(vm.appointments);
		vm.past          = $filter('pastFilter')(vm.appointments);
		// vm.edit					= apptFactory.edit;
		vm.pay           = apptFactory.pay;
		vm.cancel        = apptFactory.cancel;
		vm.complete      = apptFactory.complete;

	}]);

