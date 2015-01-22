angular.
	module('homey')

	.factory('fbFactory', ['LoginFactory', '$state', function (LoginFactory, $state) {
		return {

			fbLogin: function () {
				FB.login(function (response) {
					if (response.status === 'connected') {
					    // Logged into your app and Facebook.
					    // console.log(response.authResponse.accessToken);
					    FB.api('/me', function (response) {
					    	// A) Check their email in our DB, and log them in if it exists
						    // B) If not, then create a user, fill in all the shits, and then log them in.
					    	LoginFactory.fbLogin(response)
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