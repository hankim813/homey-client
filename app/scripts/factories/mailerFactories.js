angular
	.module('homey')

	.factory('MailerFactory', ['$http', '$q', function ($http, $q) {
		function sendContact (form) {
			var d = $q.defer();
			var uri = 'http://localhost:3000/api/mailer/contact';
			// var uri = 'https://homey-api.herokuapp.com/api/mailer/contact';
			$http.post(uri, form).success(function (response) {
				d.resolve(response);
			}).error(function (error) {
				d.reject(error);
			})
			
			return d.promise;
		};

		return {
			sendContact: sendContact
		};
	}]);