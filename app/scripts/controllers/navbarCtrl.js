angular
	.module('homey')

	.controller('NavbarController', ['AuthFactory', function (AuthFactory) {

		var vm = this;
		AuthFactory.check();
		vm.loggedIn = AuthFactory.isLogged;
	}]);