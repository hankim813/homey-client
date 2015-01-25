angular
  .module('homey')

  .controller('serviceProviderController', ['$state', 'spService', 'spFactory', 'spLoginFactory', function ($state, spService, spFactory, spLoginFactory) {

    var vm = this;
    vm.info = spService.sp;
    vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.delete = function () {
      spFactory.delete(vm.info.id)
        .then(
          function () {
            $state.go('/');
        }, function (error) {
          // handle error redirection
          console.log(error);
        });
      };

    vm.logout = spLoginFactory.logout;
  }])

  .controller('serviceProviderEditController', ['$state', 'spService', 'spFactory', function ($state, spService, spFactory) {

    var vm = this;
    vm.editForm = spService.sp;
    vm.submitData = function () {
      spFactory.edit(vm.editForm)
        .then(function () {
          vm.editForm = {};

          $state.go('dashboard');
      }, function (error) {
        // handle error redirection
        console.log(error);
      });
    };
  }]);