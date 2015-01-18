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
		});
	});