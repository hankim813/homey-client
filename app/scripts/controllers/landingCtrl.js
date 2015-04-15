angular
	.module('homey')

	.controller('LandingController', ['$window', function ($window){
		(function (){
			var padding = $('.navi').css('height');
			$('#body-container').css('padding-top', padding);
			console.log($('#body-container').css('padding-top'));
		})();
	}]);