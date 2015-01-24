angular
  .module('homey')

  .controller('serviceProviderController', ['$state', 'serviceProvider', 'serviceProviderService', 'serviceProviderFactory', function ($state, serviceProvider, serviceProviderService, serviceProviderFactory) {

    var vm = this;
    vm.info = serviceProvider;
    vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.delete = function () {
      serviceProviderFactory.deleteserviceProvider(vm.info.id)
        .then(
          function () {
            $state.go('/');
        }, function (error) {
          // handle error redirection
          console.log(error);
        });
      };
  }])

  .controller('EditController', ['$state','serviceProvider', 'serviceProviderService', 'serviceProviderFactory', function ($state, serviceProvider, serviceProviderService, serviceProviderFactory) {

    var vm = this;
    vm.editForm = serviceProvider;

    vm.editserviceProvider = function () {
      console.log(vm.editForm);
      serviceProviderFactory.edit(vm.editForm)
        .then(function () {
          vm.editForm = {};

          $state.go('profile');
      }, function (error) {
        // handle error redirection
        console.log(error);
      });
    };
  }]);