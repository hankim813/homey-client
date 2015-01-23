angular.
	module('homey')

	.factory('fbFactory', ['userLoginFactory', '$state', function (userLoginFactory, $state) {
		return {

			initialize: function () {
		    window.fbAsyncInit = function() {
		      FB.init({
		        appId      : '836908086372942',
		        xfbml      : true,
		        version    : 'v2.2'
		      });
		    };

		    (function(d, s, id){
		       var js, fjs = d.getElementsByTagName(s)[0];
		       if (d.getElementById(id)) {return;}
		       js = d.createElement(s); js.id = id;
		       js.src = "//connect.facebook.net/en_US/sdk.js";
		       fjs.parentNode.insertBefore(js, fjs);
		     }(document, 'script', 'facebook-jssdk'));
			},

			fbLogin: function () {
				FB.login(function (response) {
					if (response.status === 'connected') {
					    // Logged into your app and Facebook.
					    // console.log(response.authResponse.accessToken);
					    FB.api('/me', function (response) {
					    	// A) Check their email in our DB, and log them in if it exists
						    // B) If not, then create a user, fill in all the shits, and then log them in.
					    	userLoginFactory.fbLogin(response)
					    		.then(function (response) {
					    			$state.go('home');
					    		}, function (error) {
					    			console.log(error);
					    		});
					        // console.log(JSON
					    });
					  } else if (response.status === 'not_authorized') {
					    // The person is logged into Facebook, but not your app.
					    console.log("Please log in locally.")
					  } else {
					    // The person is not logged into Facebook, so we're not sure if
					    // they are logged into this app or not.
					    console.log("Yo, log in brotha.")
					  }
				}, {scope: 'public_profile,email'});
			}
		};
	}]);