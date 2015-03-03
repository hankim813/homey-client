angular
  .module('homey')

  .controller('AdminController', ['$state', 'adminService', 'adminFactory', 'adminLoginFactory', 'adApptService', 'Middleware', 'upcomingAppointments', 'pastAppointments', 'unassignedAppointments', 'providers', function ($state, adminService, adminFactory, adminLoginFactory, adApptService, Middleware, upcomingAppointments, pastAppointments, unassignedAppointments, providers) {

    // Middleware.redirectToForbidden('admin');

    var vm = this;
    vm.info = adminService.admin;
    vm.providers = providers;
    console.log(providers);
    // vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.upcoming      = upcomingAppointments;
    vm.past          = pastAppointments;
    vm.unassigned    = unassignedAppointments;

    vm.delete = function () {
      adminFactory.delete()
        .then(
          function () {
            $state.go('/');
        }, function (error) {
          // handle error redirection
          console.log(error);
        });
      };

    vm.assign = adminFactory.assign;
    vm.logout = adminLoginFactory.logout;
  }])

  .controller('AdminEditController', ['$state', 'adminService', 'adminFactory', 'Middleware', function ($state, adminService, adminFactory, Middleware) {

    Middleware.redirectToForbidden('admin');

    var vm = this;
    vm.editForm = adminService.admin;
    vm.submitData = function () {
      adminFactory.edit(vm.editForm)
        .then(function () {
          vm.editForm = {};

          $state.go('adminDashboard');
      }, function (error) {
        // handle error redirection
        console.log(error);
      });
    };
  }]);