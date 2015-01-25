angular
  .module('homey')

  .controller('serviceProviderController', ['$state', 'spService', 'spFactory', 'spLoginFactory', function ($state, spService, spFactory, spLoginFactory) {

    var vm = this;
    vm.info = spService.sp;
    vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.delete = function () {
      spFactory.deleteServiceProvider(vm.info.id)
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
    console.log(vm.editForm);
    vm.editserviceProvider = function () {
      console.log(vm.editForm);
      spFactory.edit(vm.editForm)
        .then(function () {
          vm.editForm = {};

          $state.go('profile');
      }, function (error) {
        // handle error redirection
        console.log(error);
      });
    };
  }]);