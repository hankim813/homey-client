angular
	.module('homey')

	.factory('userFactory', ['$http', '$q', 'userService', function ($http, $q, userService) {
		return {
			saveUserToService: function () {
				var d = $q.defer();
				$http.get('http://localhost:3000/api/users/show')
					.success(function (response) {
						userService.user = response.user;
						d.resolve(response);
					})
					.error(function (response) {
						d.reject(response);
					}); 
					return d.promise;
			}
		}
	}]);