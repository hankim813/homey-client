angular
	.module('homey')

	.controller('NavbarController', ['AuthFactory', 'userLoginFactory', 'fbFactory', '$location', function (AuthFactory, userLoginFactory, fbFactory, $location) {

		var vm = this;
		fbFactory.initialize();
		AuthFactory.check();
		vm.loggedIn = loggedIn;
		vm.logout = userLoginFactory.logout;
		vm.isActive = isActive;

		function loggedIn () {
			return AuthFactory.isLogged;
		};

		function isActive (currentState) {
			return $location.path() === currentState;
		};
	}]);