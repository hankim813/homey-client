angular
	.module('homey')

	.controller('AppointmentController', ['$filter','appointments', 'apptFactory', 'userService', function ($filter,appointments, apptFactory, userService) {
		var vm           = this;

		vm.user          = userService.user;
		vm.appointments  = appointments;
		vm.upcoming      = $filter('upcomingFilter')(vm.appointments);
		vm.past          = $filter('pastFilter')(vm.appointments);
		// vm.edit					= apptFactory.edit;
		vm.pay           = apptFactory.pay;
		vm.cancel        = apptFactory.cancel;
		vm.complete      = apptFactory.complete;
	}]);

	// .filter('upcomingFilter',[function () {

 //    return function(appointments) {
 //      console.log("im inside you filter");
 //      var upcomingAppointments = [];

 //      // date filter
 //      var currentDate = Date.now();

 //      // if the appointments are loaded
 //      if (appointments && appointments.length > 0) {
 //        angular.forEach(appointments, function (index, appointment) {
 //          var appointmentDate = new Date(appointment.service_date);

 //          if (appointmentDate >= currentDate) {
 //            upcomingAppointments.push(appointment);
 //          }
 //        });

 //        return upcomingAppointments;
 //      }
 //    };
 //  }])

 //  .filter('pastFilter', [function () {

 //    return function(appointments) {
 //      var pastAppointments = [];

 //      // date filter
 //      var currentDate = Date.now();

 //      // if the appointments are loaded
 //      if (appointments && appointments.length > 0) {
 //        angular.forEach(appointments, function (index, appointment) {
 //          var appointmentDate = new Date(appointment.service_date);

 //          if (appointmentDate <= currentDate) {
 //            pastAppointments.push(appointment);
 //          }
 //        });

 //        return pastAppointments;
 //      }
 //    };
 //  }])
