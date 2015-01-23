angular.
	module('homey')

	.factory('AuthFactory', ['$localStorage', function($localStorage) {
		var auth = {
			isLogged: false,

			check: function () {
				if ($localStorage.token && ($localStorage.userId || $localStorage.spId || $localStorage.adminId)) {
					this.isLogged = true;
				} else {
					this.isLogged = false;
					if ($localStorage.userId) { delete $localStorage.userId; }
					if ($localStorage.spId) { delete $localStorage.spId; }
					if ($localStorage.adminId) { delete $localStorage.adminId; }
					delete $localStorage.token;
				}
			}
		};
		return auth;
	}]);