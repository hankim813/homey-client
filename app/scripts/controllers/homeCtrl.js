angular
	.module('homey')

  .controller('HomeController',['$state', 'userLoginFactory', function ($state, userLoginFactory) {

  	var home = this;

  	home.logout = userLoginFactory.logout;
  }]);
