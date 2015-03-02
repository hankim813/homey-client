angular
	.module('homey')

	.controller('NavbarController', ['AuthFactory', 'userLoginFactory', 'fbFactory', function (AuthFactory, userLoginFactory, fbFactory) {

		var vm = this;
		fbFactory.initialize();
		AuthFactory.check();
		vm.loggedIn = loggedIn;
		vm.logout = userLoginFactory.logout;

		function loggedIn () {
			return AuthFactory.isLogged;
		};
	}]);