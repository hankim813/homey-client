angular
  .module('homey')

  .controller('LoginController',['$state', 'LoginFactory', function ($state,LoginFactory) {

  	var vm = this;
  	vm.userForm = {};

  	vm.register = function () {
      console.log(vm.userForm);
  		LoginFactory.register(vm.userForm)
        .then(function () {
    			vm.userForm = {};
    			$state.go('home');
    		}, function (error) {
          // handle error redirection
          console.log(error);
      });
  	};

  	vm.login = function () {
  		LoginFactory.login(vm.userForm)
        .then(function () {
    			vm.userForm = {};
    			$state.go('home');
    		}, function (error) {
          // handle error redirection
          console.log(error);
      });
  	}
  }]);
