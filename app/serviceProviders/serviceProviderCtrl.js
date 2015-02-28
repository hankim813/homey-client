angular
  .module('homey')

  .controller('serviceProviderController', ['$state', 'spService', 'spFactory', 'spLoginFactory', 'Middleware', function ($state, spService, spFactory, spLoginFactory, Middleware) {

    Middleware.redirectToForbidden('sp');

    var vm = this;
    vm.info = spService.sp;
    vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.delete = function () {
      spFactory.delete()
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

  .controller('serviceProviderEditController', ['$state', 'spService', 'spFactory', 'Middleware', function ($state, spService, spFactory, Middleware) {

    Middleware.redirectToForbidden('sp');

    var vm = this;
    vm.editForm = spService.sp;
    vm.submitData = function () {
      spFactory.edit(vm.editForm)
        .then(function () {
          vm.editForm = {};

          $state.go('spDashboard');
      }, function (error) {
        // handle error redirection
        console.log(error);
      });
    };
  }]);