angular.
	module('homey')

	.factory('userLoginFactory', ['$http', '$q', '$localStorage', '$state', 'AuthToken', 'AuthFactory', 'userService', function($http, $q, $localStorage, $state, AuthToken, AuthFactory, userService) {

		return {

			register: function(userForm) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/register', userForm)
				$http.post('https://homey-api.herokuapp.com/api/register', userForm)
				.success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			login: function (userForm) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/login', {
				$http.post('https://homey-api.herokuapp.com/api/login', {
					email: userForm.email,
					password: userForm.password
				}).success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			logout: function () {
				delete $localStorage.token;
				delete $localStorage.userId;
				AuthFactory.isLogged = false;
				FB.logout();
				delete userService.user;

				$state.go('landing');
			},

			fbLogin: function (user) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/fb', user)
				$http.post('https://homey-api.herokuapp.com/api/fb', user)
				.success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					console.log(response.error);
					d.reject(response.error);
				});
				return d.promise;
			}
		};
	}])

	.factory('spLoginFactory', ['$http', '$q', '$localStorage', '$state', 'AuthToken', 'AuthFactory', 'spService', function($http, $q, $localStorage, $state, AuthToken, AuthFactory, spService) {

		return {

			register: function(spForm) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/serviceProviders/register', spForm)
				$http.post('https://homey-api.herokuapp.com/api/serviceProviders/register', spForm)
				.success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			login: function (spForm) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/serviceProviders/login', {
				$http.post('https://homey-api.herokuapp.com/api/serviceProviders/login', {
					email: spForm.email,
					password: spForm.password
				}).success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			logout: function () {
				delete $localStorage.token;
				delete $localStorage.spId;
				AuthFactory.isLogged = false;

				delete spService.sp;

				$state.go('landing');
			}
		};
	}])

	.factory('adminLoginFactory', ['$http', '$q', '$localStorage', '$state', 'AuthToken', 'AuthFactory', 'adminService', function($http, $q, $localStorage, $state, AuthToken, AuthFactory, adminService) {

		return {

			register: function(adminForm) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/admins/register', adminForm)
				$http.post('https://homey-api.herokuapp.com/api/admin/register', adminForm)
				.success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			login: function (adminForm) {
				var d = $q.defer();

				// $http.post('http://localhost:3000/api/admins/login', {
				$http.post('https://homey-api.herokuapp.com/api/admin/login', {
					email: adminForm.email,
					password: adminForm.password
				}).success(function (response) {
					AuthToken.set(response);
					AuthFactory.isLogged = true;
					d.resolve(response);
				}).error(function (response) {
					d.reject(response.error);
				});
				return d.promise;
			},

			logout: function () {
				delete $localStorage.token;
				delete $localStorage.adminId;
				AuthFactory.isLogged = false;

				delete adminService.admin;

				$state.go('landing');
			}
		};
	}]);