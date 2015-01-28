angular
  .module('homey')

  .controller('adminController', ['$state', 'adminService', 'adminFactory', 'adminLoginFactory', function ($state, adminService, adminFactory, adminLoginFactory) {

    var vm = this;
    vm.info = adminService.admin;
    vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.delete = function () {
      adminFactory.delete(vm.info.id)
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

  .controller('adminEditController', ['$state', 'adminService', 'adminFactory', function ($state, adminService, adminFactory) {

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