angular
	.module('homey')

	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider

		.state('edit.addresses', {
			url: '/addresses',
			resolve: {
				addresses: function (addressService) {
				  return addressService.addresses;
				}
			},
			views: {
				'addresses': {
					templateUrl: 'addresses/index.html',
					controller: 'AddressController',
					controllerAs: 'address'
				}
			}
		})

		.state('edit.addresses.new', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.homeCleaning.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.officeCleaning.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.carWash.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.driver.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.security.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.chef.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.gardening.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})

		.state('newAppointment.contractor.newAddress', {
			url: '/addresses/new',
			views: {
				'newAddress': {
					templateUrl: 'addresses/new.html',
					controller: 'NewAddressController',
					controllerAs: 'newAddress'
				}
			}
		})
	}]);