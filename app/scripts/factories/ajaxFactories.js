angular
	.module('homey')

	.factory('ajaxFactory', ['$http', '$q', function ($http, $q) {
		return {
			request: function (uri, type, data) {
				var d = $q.defer();

				switch (type) {
					case 'get':
						(function () {
							$http.get(uri).success(function (response) {d.resolve(response);}).error(function (response) {d.reject(response.error);})
						})();
						break;
					case 'post':
						(function () {
							$http.post(uri, data).success(function (response) {d.resolve(response);}).error(function (response) {d.reject(response.error);})
						})();
						break;
					case 'put':
						(function () {
							$http.put(uri).success(function (response) {d.resolve(response);}).error(function (response) {d.reject(response.error);})
						})();
						break;
				}

				return d.promise;
			}
		}
	}]);