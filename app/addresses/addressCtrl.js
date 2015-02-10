angular
	.module('homey')

	.controller('AddressController', ['addresses', 'addressFactory', function (addresses, addressFactory) {
		var vm = this;
		vm.destroy = addressFactory.destroy;
		vm.formData = {};
		vm.all = addresses;
	}])

	.controller('NewAddressController', ['addressFactory', function (addressFactory) {
		var vm = this;
		vm.create = addressFactory.create;
	}]);