angular
	.module('homey')

	.factory('apptFactory', ['$localStorage', 'ajaxFactory', 'apptService', function ($localStorage, ajaxFactory, apptService) {
		 function saveApptsToService (userId) {
				// var uri = 'http://localhost:3000/api/users/' + userId + '/appointments';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				return apptService.appointments = ajaxFactory.request(uri, 'get');
			};

			function book (userId) {
				// var uri = 'http://localhost:3000/api/users/' + userId + '/appointments';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				ajaxFactory.request(uri, 'post').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});
			};

			function pay (id) {
				// var uri = 'http://localhost:3000/api/appointments/' + id + '/pay';
				var uri = 'https://homey-api.herokuapp.com/api/appointments/' + id + '/pay';
				ajaxFactory.request(uri, 'put').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});
			};

			function complete (id) {
				// var uri = 'http://localhost:3000/api/appointments/' + id + '/complete';
				var uri = 'https://homey-api.herokuapp.com/api/appointments/' + id + '/complete';
				ajaxFactory.request(uri, 'put').then(function (response) {
					saveApptsToService($localStorage.userId);
				}, function (error) {
					console.log(error);
				});

			};

			function cancel (id) {
				// var uri = 'http://localhost:3000/api/appointments/' + id + '/cancel';
				var uri = 'https://homey-api.herokuapp.com/api/appointments/' + id + '/cancel';
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
	}])

	.factory('adApptFactory', ['ajaxFactory', 'adApptService', function (ajaxFactory, adApptService) {
		 function saveUpcomingToService () {
				// var uri = 'http://localhost:3000/api/appointments/upcoming';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				return adApptService.upcoming = ajaxFactory.request(uri, 'get');
		 }

		 function savePastToService () {
				// var uri = 'http://localhost:3000/api/appointments/past';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				return adApptService.past = ajaxFactory.request(uri, 'get');
		 }

		 function saveUnassignedToService () {
				// var uri = 'http://localhost:3000/api/appointments/unassigned';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				return adApptService.unassigned = ajaxFactory.request(uri, 'get');
		 }


			return {
				saveUpcomingToService	  : saveUpcomingToService,
				savePastToService	      : savePastToService,
				saveUnassignedToService	: saveUnassignedToService,

			}
	}])

	.factory('spApptFactory', ['ajaxFactory', 'spApptService', function (ajaxFactory, spApptService) {
		 function saveUpcomingToService (spId) {
				// var uri = 'http://localhost:3000/api/sp/' + spId + '/appointments/upcoming';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				return spApptService.upcoming = ajaxFactory.request(uri, 'get');
		 }

		 function savePastToService (spId) {
				// var uri = 'http://localhost:3000/api/sp/' + spId + '/appointments/past';
				var uri = 'https://homey-api.herokuapp.com/api/users/' + userId + '/appointments';
				return spApptService.past = ajaxFactory.request(uri, 'get');
		 }

			return {
				saveUpcomingToService	  : saveUpcomingToService,
				savePastToService	      : savePastToService
			}
	}]);
