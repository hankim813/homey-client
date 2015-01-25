angular
	.module('homey')

	.factory('apptFactory', ['$http', '$q', '$localStorage', 'ajaxFactory', 'apptService', function ($http, $q, $localStorage, ajaxFactory, apptService) {
		 function saveApptsToService (userId) {
		 		console.log('saving....')
				var uri = 'http://localhost:3000/api/users/' + userId + '/appointments';
				return apptService.appointments = ajaxFactory.request(uri, 'get');
			};

			function book (userId) {
				var uri = 'http://localhost:3000/api/users/' + userId + '/appointments';
				ajaxFactory.request(uri, 'post').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});
			};

			function pay (id) {
				var uri = 'http://localhost:3000/api/appointments/' + id + '/pay';
				ajaxFactory.request(uri, 'put').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});
			};

			function complete (id) {
				var uri = 'http://localhost:3000/api/appointments/' + id + '/complete';
				ajaxFactory.request(uri, 'put').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});

			};

			function cancel (id) {
				var uri = 'http://localhost:3000/api/appointments/' + id + '/cancel';
				ajaxFactory.request(uri, 'put').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});
			};

			return {
				saveApptsToService	: saveApptsToService,
				book								: book,
				pay									: pay,
				complete						: complete,
				cancel							: cancel
			}
	}]);
