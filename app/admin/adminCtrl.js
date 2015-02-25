angular
  .module('homey')

  .controller('AdminController', ['$state', 'adminService', 'adminFactory', 'adminLoginFactory', 'adApptService', function ($state, adminService, adminFactory, adminLoginFactory, adApptService) {

    var vm = this;
    vm.info = adminService.admin;
    vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.upcoming      = adApptService.upcoming;
    vm.past          = adApptService.past;
    vm.unassigned    = adApptService.unassigned;

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

    vm.logout = adminLoginFactory.logout;
  }])

  .controller('AdminEditController', ['$state', 'adminService', 'adminFactory', function ($state, adminService, adminFactory) {

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