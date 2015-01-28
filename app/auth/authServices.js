angular.
	module('homey')

	.factory('AuthToken', ['$localStorage', function($localStorage) {
		return {
			set: function (data) {
				$localStorage.token = data.token;
				if (data.userId) {
					$localStorage.userId = data.userId;
				} else if (data.spId) {
					$localStorage.spId = data.spId;
				} else if (data.adminId) {
					$localStorage.adminId = data.adminId;
				}
			},

			get: function () {
				return $localStorage.token;
			}
		}
	}]);