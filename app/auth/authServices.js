angular.
	module('homey')

	.factory('AuthToken', ['$localStorage', function($localStorage) {
		return {
			set: function (data) {
				$localStorage.token = data.token;
				$localStorage.userId = data.user;
			},

			get: function () {
				return $localStorage.token;
			}
		}
	}]);