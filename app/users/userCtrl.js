angular
	.module('homey')

	.controller('UserController', ['$state', 'user', 'userService', 'userFactory', function ($state, user, userService, userFactory) {

		var vm = this;
		vm.info = userService.user;
		vm.info.gender === 0 ? vm.info.gender = 'Male' : vm.info.gender = 'Female';

    vm.delete = function () {
      userFactory.deleteUser(vm.info.id)
      	.then(
	        function () {
	          $state.go('/');
        }, function (error) {
        	// handle error redirection
        	console.log(error);
        });
	    };
	}])

	.controller('EditController', ['$state','user', 'userService', 'userFactory', function ($state, user, userService, userFactory) {

	  var vm = this;
	  vm.editForm = userService.user;

	  vm.editUser = function () {
	    userFactory.edit(vm.editForm)
	    	.then(function () {
	      	vm.editForm = {};

	      	$state.go('profile');
	    }, function (error) {
	    	// handle error redirection
	    	console.log(error);
	    });
	  };
	}]);