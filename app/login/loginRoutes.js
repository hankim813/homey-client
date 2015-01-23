angular
	.module('homey')

	.config(function($stateProvider) {

		$stateProvider

		.state('userLogin', {
		  url: '/users/login',
		  templateUrl: 'login/userLogin.html',
		  controller: 'UserLoginController',
		  controllerAs: 'auth'
		})

		.state('userRegister', {
			url: '/users/register',
			templateUrl: 'login/userRegister.html',
			controller: 'UserLoginController',
			controllerAs: 'auth'
		})

		.state('serviceProviderLogin', {
		  url: '/serviceProviders/login',
		  templateUrl: 'login/serviceProviderLogin.html',
		  controller: 'ServiceProviderLoginController',
		  controllerAs: 'auth'
		})

		.state('serviceProviderRegister', {
			url: '/serviceProviders/register',
			templateUrl: 'login/serviceProviderRegister.html',
			controller: 'ServiceProviderLoginController',
			controllerAs: 'auth'
		});
	});