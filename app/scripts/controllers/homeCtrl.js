angular
	.module('homey')

  .controller('HomeController',['$state', 'userLoginFactory', 'Middleware', function ($state, userLoginFactory, Middleware) {

  	Middleware.redirectToForbidden('user');

  	var home = this;

  	home.logout = userLoginFactory.logout;
  }]);
