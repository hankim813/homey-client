angular.
	module('homey')

	.factory('AuthFactory', ['$localStorage', function($localStorage) {
		var auth = {
			isLogged: false,

			check: function () {
				if ($localStorage.token && $localStorage.userId) {
					this.isLogged = true;
				} else {
					this.isLogged = false; 
					delete $localStorage.user;
					delete $localStorage.token;
				}
			}
		};
		return auth;
	}]);