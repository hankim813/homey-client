angular
	.module('homey')

	.config(function($stateProvider) {

		$stateProvider

		.state('userLogin', {
		  url: '/users/login',
		  templateUrl: '/login/userLogin.html',
		  controller: 'UserLoginController',
		  controllerAs: 'userAuth'
		})

		.state('spLogin', {
		  url: '/service-providers/login',
		  templateUrl: '/login/spLogin.html',
		  controller: 'SpLoginController',
		  controllerAs: 'spAuth'
		})

		.state('userRegister', {
			url: '/users/register',
			templateUrl: '/login/userRegister.html',
			controller: 'UserRegisterController',
			controllerAs: 'userAuth'
		})

		.state('spRegister', {
			url: '/service-providers/register',
			templateUrl: '/login/spRegister.html',
			controller: 'SpRegisterController',
			controllerAs: 'spAuth'
		})

		.state('adminLogin', {
		  url: '/admins/login',
		  templateUrl: '/login/adminLogin.html',
		  controller: 'AdminLoginController',
		  controllerAs: 'adminAuth'
		});

	});