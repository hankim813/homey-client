angular
	.module('homey')

	.factory('addressFactory', ['$localStorage', '$state', 'ajaxFactory', 'addressService', function ($localStorage, $state, ajaxFactory, addressService) {
		function create (data) {
			// var uri = 'http://localhost:3000/api/addresses';
			var uri = 'https://homey-api.herokuapp.com/api/addresses';
			ajaxFactory.request(uri, 'post', data).then(function (response) {
					saveAddressesToService($localStorage.userId).then(function (response) {
					$state.reload();
				}, function (error) {
					console.log(error);
				});
			}, function (error) {
				console.log(error);
			});
		};

		function edit (id, data) {
			// var uri = 'http://localhost:3000/api/addresses/' + id + '/edit';
			var uri = 'https://homey-api.herokuapp.com/api/addresses/' +id + '/edit';
			ajaxFactory.request(uri, 'put', data).then(function (response) {
					saveAddressesToService($localStorage.userId).then(function (response) {
					$state.reload();
				}, function (error) {
					console.log(error);
				});
			}, function (error) {
				console.log(error);
			});
		};

		function destroy (id) {
			// var uri = 'http://localhost:3000/api/addresses/' + id + '/delete';
			var uri = 'https://homey-api.herokuapp.com/api/addresses/' + id + '/delete';
			ajaxFactory.request(uri, 'delete').then(function (response) {
					saveAddressesToService($localStorage.userId).then(function (response) {
					$state.reload();
				}, function (error) {
					console.log(error);
				});
			}, function (error) {
				console.log(error);
			});
		};

		function saveAddressesToService (id) {
			// var uri = 'http://localhost:3000/api/users/' + id + '/addresses';
			var uri = 'https://homey-api.herokuapp.com/api/users/' + id + '/addresses';
			return addressService.addresses = ajaxFactory.request(uri, 'get');
		};

		return {
			create: create,
			saveAddressesToService: saveAddressesToService,
			edit: edit,
			destroy: destroy
		};
	}]);