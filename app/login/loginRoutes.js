angular
	.module('homey')

	.config(function($stateProvider) {

		$stateProvider

		.state('userLogin', {
		  url: '/users/login',
		  templateUrl: '/login/userLogin.html',
		  controller: 'UserLoginController',
		  controllerAs: 'auth'
		})

		.state('userRegister', {
			url: '/users/register',
			templateUrl: '/login/userRegister.html',
			controller: 'UserLoginController',
			controllerAs: 'auth'
		})

		.state('serviceProviderLogin', {
		  url: '/serviceProviders/login',
		  templateUrl: '/login/serviceProviderLogin.html',
		  controller: 'ServiceProviderLoginController',
		  controllerAs: 'spAuth'
		})

		.state('serviceProviderRegister', {
			url: '/serviceProviders/register',
			templateUrl: '/login/serviceProviderRegister.html',
			controller: 'ServiceProviderLoginController',
			controllerAs: 'spAuth'
		})

		.state('adminLogin', {
		  url: '/admin/login',
		  templateUrl: '/login/adminLogin.html',
		  controller: 'AdminLoginController',
		  controllerAs: 'adminAuth'
		})

		.state('adminRegister', {
			url: '/admin/register',
			templateUrl: '/login/adminRegister.html',
			controller: 'AdminLoginController',
			controllerAs: 'adminAuth'
		});
	});