angular
	.module('homey')

	.factory('discountFactory', ['ajaxFactory', '$state', function (ajaxFactory, $state) {
		function generateDiscountCode (data) {
			console.log(data)
			var uri = 'http://localhost:3000/api/admins/' + data.admin_id + '/discounts';
			ajaxFactory.request(uri, 'post', data)
				.then(function (response) {
					$state.go('adminDashboard')
				}, function (error) {
					console.log(error);
				});
		}

		return {
			generateDiscountCode: generateDiscountCode
		}
	}]);