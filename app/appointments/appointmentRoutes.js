angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider

		.state('appointments', {
			url: '/appointments',
			resolve: {
				appointments: function (apptService) {
					return apptService.appointments;
				}
			},
			templateUrl: '/appointments/index.html',
			controller: 'AppointmentController',
			controllerAs: 'appt'
		})

		.state('newAppointment', {
			url: '/appointments/new',
			templateUrl: '/appointments/new.html',
			controller: 'NewAppointmentController',
			controllerAs: 'appt'
		})
	}])