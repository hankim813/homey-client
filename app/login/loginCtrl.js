angular
  .module('homey')

  .controller('UserLoginController',['$state', 'userLoginFactory', function ($state,userLoginFactory) {

  	var vm = this;
  	vm.userForm = {};

  	vm.register = function () {
  		userLoginFactory.register(vm.userForm)
        .then(function () {
    			vm.userForm = {};
    			$state.go('home');
    		}, function (error) {
          // handle error redirection
          console.log(error);
      });
  	};

  	vm.login = function () {
  		userLoginFactory.login(vm.userForm)
        .then(function () {
    			vm.userForm = {};
    			$state.go('home');
    		}, function (error) {
          // handle error redirection
          console.log(error);
      });
  	}
  }])

  .controller('ServiceProviderLoginController', ['$state', 'spLoginFactory', function ($state, spLoginFactory) {

    var vm = this;
    vm.spForm = {};

    vm.register = function () {
      spLoginFactory.register(vm.spForm)
        .then(function () {
          vm.spForm = {};
          $state.go('home');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    };

    vm.login = function () {
      spLoginFactory.login(vm.spForm)
        .then(function () {
          vm.spForm = {};
          $state.go('home');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    }

  }]);
