angular
	.module('homey')

	.factory('bookingFactory', ['$http', '$localStorage', '$state', 'ajaxFactory', 'apptFactory', function ($http, $localStorage, $state, ajaxFactory, apptFactory) {

		function create (formData) {
			var uri = 'http://localhost:3000/api/appointments/bookings/homeCleanings';

			ajaxFactory.request(uri, 'post', formData).then(function (response) {
				apptFactory.saveApptsToService($localStorage.userId).then(function (response) {
					$state.go('appointments');
				}, function (error) {
					console.log(error);
				});
			}, function (error) {
				console.log(error);
			})
		};

		return {
			create: create
		}
	}])