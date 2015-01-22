angular
	.module('homey')

	.config(function($stateProvider) {

		$stateProvider

		.state('login', {
		  url: '/login',
		  templateUrl: 'login/login.html',
		  controller: 'LoginController',
		  controllerAs: 'auth'
		})

		.state('register', {
			url: '/register',
			templateUrl: 'login/register.html',
			controller: 'LoginController',
			controllerAs: 'auth'
		})

		.state('homey_login', {
		  url: '/homey_login',
		  templateUrl: 'login/homey_login.html',
		  controller: 'HomeyLoginController',
		  controllerAs: 'auth'
		})

		.state('homey_register', {
			url: '/homey_register',
			templateUrl: 'login/homey_register.html',
			controller: 'HomeyLoginController',
			controllerAs: 'auth'
		});
	});