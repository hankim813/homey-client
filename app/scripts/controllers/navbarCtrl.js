angular
	.module('homey')

	.controller('NavbarController', ['$location', function ($location) {

		var vm = this;
		// fbFactory.initialize();
		// AuthFactory.check();
		// vm.loggedIn = loggedIn;
		// vm.loggedInType = loggedInType;
		// vm.logoutUser = userLoginFactory.logout;
		// vm.logoutSp = spLoginFactory.logout;
		// vm.logoutAdmin = adminLoginFactory.logout;
		vm.isActive = isActive;

		// function loggedIn () {
		// 	return AuthFactory.isLogged;
		// };

		// function loggedInType (type) {
		// 	var result = false;
		// 	if (AuthFactory.isLogged) {
		// 		if (type === 'user' && userService.user) {
		// 			result = true;
		// 		} else if (type === 'sp' && spService.sp) {
		// 			result = true;
		// 		} else if (type === 'admin' && adminService.admin) {
		// 			result = true;
		// 		}
		// 	}
		// 	return result;
		// };

		function isActive (currentState) {
			return $location.path() === currentState;
		};
	}]);