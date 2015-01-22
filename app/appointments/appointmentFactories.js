angular
	.module('homey')

	.factory('apptFactory', ['$http', '$q', '$localStorage', 'ajaxFactory', 'apptService', function ($http, $q, $localStorage, ajaxFactory, apptService) {
		 function saveApptsToService (userId) {
				var uri = 'http://localhost:3000/api/users/' + userId + '/appointments';
				return apptService.appointments = ajaxFactory.request(uri, 'get');
			};

			function book (userId) {
				var uri = 'http://localhost:3000/api/users/' + userId + '/appointments';
				ajaxFactory.request(uri, 'post');
				// update apptService
				return apptService.appointments = saveApptsToService(userId);
			};

			function pay (id) {
				var uri = 'http://localhost:3000/api/appointments/' + id + '/pay';
				ajaxFactory.request(uri, 'put');
				return apptService.appointments = saveApptsToService($localStorage.userId);
			};

			function complete (id) {
				console.log(this);
				var uri = 'http://localhost:3000/api/appointments/' + id + '/complete';
				ajaxFactory.request(uri, 'put');
				return apptService.appointments = saveApptsToService($localStorage.userId);

			};

			function cancel (id) {
				var uri = 'http://localhost:3000/api/appointments/' + id + '/cancel';
				ajaxFactory.request(uri, 'put');
				return apptService.appointments = saveApptsToService($localStorage.userId);
			};

			return {
				saveApptsToService	: saveApptsToService,
				book								: book,
				pay									: pay,
				complete						: complete,
				cancel							: cancel
			}
	}]);
