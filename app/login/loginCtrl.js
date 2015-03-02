angular
  .module('homey')

  .controller('UserLoginController',['$state', 'userLoginFactory', function ($state,userLoginFactory) {

  	var vm = this;
  	vm.userForm = {};
  	vm.login = login;

    function login () {
  		userLoginFactory.login(vm.userForm)
        .then(function () {
    			vm.userForm = {};
    			$state.go('userDashboard');
    		}, function (error) {
          // handle error redirection
          console.log(error);
      });
  	};
  }])

  .controller('UserRegisterController',['$state', 'userLoginFactory', function ($state,userLoginFactory) {

    var vm = this;
    vm.userForm = {};
    vm.activeMale = false;
    vm.activeFemale = false;
    vm.register = register;
    vm.check = check;

    function register () {
      userLoginFactory.register(vm.userForm)
        .then(function () {
          vm.userForm = {};
          $state.go('userDashboard');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    };

    function check (val) {
      if (val === 0) {
        vm.userForm.gender = 0;
        vm.activeMale = true;
        vm.activeFemale = false;
      } else {
        vm.userForm.gender = 1;
        vm.activeFemale = true;
        vm.activeMale = false;
      }
    }
  }])

  .controller('ServiceProviderLoginController', ['$state', 'spLoginFactory', function ($state, spLoginFactory) {

    var vm = this;
    vm.spForm = {};

    vm.register = function () {
      spLoginFactory.register(vm.spForm)
        .then(function () {
          vm.spForm = {};
          $state.go('spDashboard');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    };

    vm.login = function () {
      spLoginFactory.login(vm.spForm)
        .then(function () {
          vm.spForm = {};
          $state.go('spDashboard');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    }

  }])

  .controller('AdminLoginController', ['$state', 'adminLoginFactory', function ($state, adminLoginFactory) {

    var vm = this;
    vm.adminForm = {};

    vm.register = function () {
      adminLoginFactory.register(vm.adminForm)
        .then(function () {
          vm.adminForm = {};
          $state.go('adminDashboard');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    };

    vm.login = function () {
      adminLoginFactory.login(vm.adminForm)
        .then(function () {
          vm.adminForm = {};
          $state.go('adminDashboard');
        }, function (error) {
          // handle error redirection
          console.log(error);
      });
    }

  }]);
