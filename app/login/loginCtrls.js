angular
  .module('homey')

  .controller('UserLoginController',['$state', 'userLoginFactory', 'fbFactory', function ($state,userLoginFactory, fbFactory) {

    fbFactory.initialize();
    var vm = this;
    vm.userForm = {};
    vm.login = login;

    vm.fbLogin = fbFactory.fbLogin;

    function login () {
  		userLoginFactory.login(vm.userForm)
        .then(function () {
    			vm.userForm = {};
    			$state.go('userDashboard');
    		}, function (error) {
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

  .controller('SpLoginController', ['$state', 'spLoginFactory', function ($state, spLoginFactory) {

    var vm = this;
    vm.spForm = {};
    vm.login = login;

    function login () {
      spLoginFactory.login(vm.spForm)
        .then(function () {
          vm.spForm = {};
          $state.go('spDashboard');
        }, function (error) {
          console.log(error);
      });
    }

  }])

  .controller('SpRegisterController', ['$state', 'spLoginFactory', function ($state, spLoginFactory) {

    var vm = this;
    vm.spForm = {};
    vm.register = register;
    vm.check = check;

    function register () {
      spLoginFactory.register(vm.spForm)
        .then(function () {
          vm.spForm = {};
          $state.go('spDashboard');
        }, function (error) {
          console.log(error);
      });
    };

    function check (val) {
      if (val === 0) {
        vm.spForm.gender = 0;
        vm.activeMale = true;
        vm.activeFemale = false;
      } else {
        vm.spForm.gender = 1;
        vm.activeFemale = true;
        vm.activeMale = false;
      }
    }

  }])

  .controller('AdminLoginController', ['$state', 'adminLoginFactory', function ($state, adminLoginFactory) {

    var vm = this;
    vm.adminForm = {};

    vm.login = function () {
      adminLoginFactory.login(vm.adminForm)
        .then(function () {
          vm.adminForm = {};
          $state.go('adminDashboard');
        }, function (error) {
          console.log(error);
      });
    }

  }]);
