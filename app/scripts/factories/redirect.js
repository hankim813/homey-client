angular
	.module('homey')
	
  .factory('Middleware', ['$state', 'adminService', 'userService', 'spService', function ($state, adminService, userService, spService) {
    return {
      redirectToForbidden: function(userType) {
      	console.log('running')
      	switch (userType) {
      		case 'admin':
  			    if (adminService.admin === undefined) {
			        return $state.go('forbidden');
				    }
	      		break;
      		case 'user':
      			if (userService.user === undefined) {
      				return $state.go('forbidden');
      			}
      			break;
      		case 'sp':
      			if (spService.sp === undefined) {
      				return $state.go('forbidden');
      			}
      			break;
    		}
      }
    }
  }]);