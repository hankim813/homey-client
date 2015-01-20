angular
	.module('homey')

	.controller('UserController', ['$state', 'user', 'userService', 'userFactory', function ($state, user, userService, userFactory) {

		var vm = this;
		vm.info = userService.user;

    vm.delete = function () {
      userFactory.deleteUser().then(
        function () {
          $state.go('home');
        });
    };
	}]);