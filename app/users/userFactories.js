angular
	.module('homey')

	.factory('userFactory', ['$http', '$q', '$localStorage', 'userService', function ($http, $q, $localStorage, userService) {
		return {
			saveUserToService: function (id) {
				var d = $q.defer();
				// $http.get('http://localhost:3000/api/users/' + id)
				$http.get('https://homey-api.herokuapp.com/api/users/' + id)
					.success(function (response) {
						userService.user = response;
						userService.user.birthday = new Date(response.birthday);
						d.resolve(response);
					})
					.error(function (response) {
						d.reject(response);
					});
					return d.promise;
			},

			deleteUser: function (id) {
				var d = $q.defer();
				// $http.delete('http://localhost:3000/api/users/' + id + '/delete')
				$http.delete('https://homey-api.herokuapp.com/api/users/' + id + '/delete')
					.success(function (response) {
						delete $localStorage.token;
						delete $localStorage.userId;
						d.resolve(response);
					})
					.error(function (response) {
						d.reject(response);
					});
					return d.promise;
			},

			edit: function(editForm) {
			  var d = $q.defer();

			  // $http.put('http://localhost:3000/api/users/edit', {
		  	$http.put('https://homey-api.herokuapp.com/api/users/edit', {
			  	id: editForm.id,
			    email: editForm.email,
			    first_name: editForm.first_name,
			    last_name: editForm.last_name,
			    gender: editForm.gender,
			    age: editForm.age,
			    phone: editForm.phone
			  })
			  .success(function (response) {
					userService.user = response;
			    d.resolve(response.user);
			  }).error(function (response) {
			    d.reject(response.error);
			  });
			  return d.promise;
			}

		};
	}]);