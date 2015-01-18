angular
	.module('homey')

	.controller('UserController', ['user', 'userService', function (user, userService) {

		var vm = this;
		vm.info = userService.user;
	}]);