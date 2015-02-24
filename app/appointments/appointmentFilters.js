angular
  .module('homey')

  .filter('upcomingApptsFilter', function () {

    return function(appointments) {
      var upcomingAppointments = [];

      // date filter
      var currentDate = Date.now();

      // if the appointments are loaded
      if (appointments && appointments.length > 0) {
        angular.forEach(appointments, function (index, appointment) {
          var appointmentDate = new Date(appointment.service_date);

          if (appointmentDate >= currentDate) {
            upcomingAppointments.push(appointment);
          }
        });

        return upcomingAppointments;
      }
    };
  })

  .filter('pastApptsFilter', function () {

    return function(appointments) {
      var pastAppointments = [];

      // date filter
      var currentDate = Date.now();

      // if the appointments are loaded
      if (appointments && appointments.length > 0) {
        angular.forEach(appointments, function (index, appointment) {
          var appointmentDate = new Date(appointment.service_date);

          if (appointmentDate <= currentDate) {
            pastAppointments.push(appointment);
          }
        });

        return pastAppointments;
      }
    };
  })