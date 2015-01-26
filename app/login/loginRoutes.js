angular
	.module('homey')

	.config(function($stateProvider) {

		$stateProvider

		.state('userLogin', {
		  url: '/users/login',
		  templateUrl: '/app/login/userLogin.html',
		  controller: 'UserLoginController',
		  controllerAs: 'auth'
		})

		.state('userRegister', {
			url: '/users/register',
			templateUrl: '/app/login/userRegister.html',
			controller: 'UserLoginController',
			controllerAs: 'auth'
		})

		.state('serviceProviderLogin', {
		  url: '/serviceProviders/login',
		  templateUrl: '/app/login/serviceProviderLogin.html',
		  controller: 'ServiceProviderLoginController',
		  controllerAs: 'spAuth'
		})

		.state('serviceProviderRegister', {
			url: '/serviceProviders/register',
			templateUrl: '/app/login/serviceProviderRegister.html',
			controller: 'ServiceProviderLoginController',
			controllerAs: 'spAuth'
		});
	});