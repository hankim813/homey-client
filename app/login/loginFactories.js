angular.
	module('homey')

	.factory('LoginFactory', ['$http', '$q', '$localStorage', '$state', 'AuthToken', 'AuthFactory', 'userService', function($http, $q, $localStorage, $state, AuthToken, AuthFactory, userService) {

		return {

			register: function(userForm) {
				var d = $q.defer();

				$http.post('http://localhost:3000/api/register', userForm)
				.success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response.user);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			login: function (userForm) {
				var d = $q.defer();

				$http.post('http://localhost:3000/api/login', {
					email: userForm.email,
					password: userForm.password
				}).success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response.user);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			logout: function () {
				delete $localStorage.token;
				delete $localStorage.userId;
				AuthFactory.isLogged = false;

				userService.user = {};

				$state.go('/');
			},

			fbLogin: function (user) {
				var d = $q.defer();

				$http.post('http://localhost:3000/api/fb', user)
				.success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response.user);
				}).error(function (response) {
					console.log(response.error);
					d.reject(response.error);
				});
				return d.promise;
			}
		};
	}]);