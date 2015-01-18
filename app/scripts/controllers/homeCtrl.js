angular
	.module('homey')
	
  .controller('HomeController',['$state', 'LoginFactory', function ($state, LoginFactory) {

  	var home = this;

  	home.logout = LoginFactory.logout;
  }]);
