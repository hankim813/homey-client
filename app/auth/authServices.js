angular.
	module('homey')

	.factory('AuthToken', ['$localStorage', function($localStorage) {
		return {
			set: function (data) {
				$localStorage.token = data.token;
				if (data.user) {
					$localStorage.userId = data.userId;
				} else if (data.service_provider) {
					$localStorage.spId = data.spId;
				} else {
					$localStorage.adminId = data.adminId;
				}
			},

			get: function () {
				return $localStorage.token;
			}
		}
	}]);