angular
  .module('homey')

  .filter('upcomingFilter',[function () {

    return function(appointments) {
      var upcomingAppointments = [];

      // date filter
      var currentDate = Date.now();

      // if the appointments are loaded
      if (appointments && appointments.length > 0) {
        for (var i = 0; i < appointments.length; i++) {
          var appointmentDate = new Date(appointments[i].service_date);
          if (appointmentDate >= currentDate) {
            upcomingAppointments.push(appointments[i]);
          }
        }
      };

      return upcomingAppointments;
    };
  }])

  .filter('pastFilter', [function () {

    return function(appointments) {
      var pastAppointments = [];

      // date filter
      var currentDate = Date.now();

      // if the appointments are loaded
      if (appointments && appointments.length > 0) {
        for (var i = 0; i < appointments.length; i++) {
          var appointmentDate = new Date(appointments[i].service_date);
          if (appointmentDate <= currentDate) {
            pastAppointments.push(appointments[i]);
          }
        }
      };
      return pastAppointments;
    };
  }])