angular
	.module('homey')

	.controller('UserController', ['$state', 'user', 'userService', 'userFactory', 'Middleware', function ($state, user, userService, userFactory, Middleware) {

		Middleware.redirectToForbidden('user');

		var vm = this;
		vm.info = user;
		vm.info.gender === 0 ? vm.info.genderType = 'Male' : vm.info.genderType = 'Female';

    vm.delete = function () {
      userFactory.deleteUser()
      	.then(
	        function () {
	          $state.go('/');
        }, function (error) {
        	// handle error redirection
        	console.log(error);
        });
	    };
	}])

	.controller('EditController', ['$state','user', 'userService', 'userFactory', 'Middleware', function ($state, user, userService, userFactory, Middleware) {

		Middleware.redirectToForbidden('user');

	  var vm = this;
	  vm.editForm = user;

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