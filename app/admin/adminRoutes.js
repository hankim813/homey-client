angular
  .module('homey')

  .factory('AdminInterceptor', ['$injector', function ($injector) {
    return {
      responseError: function (rejection) {
        var Router = $injector.get('Router');
        Router.redirectToForbidden();
      }
    }
  }])

  .config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {

    $httpProvider.interceptors.push('AdminInterceptor');

    $stateProvider

    .state('adminDashboard', {
      url: '/admin/dashboard',
      resolve: {
        fetchAdmin: function (adminFactory, adminService, $localStorage) {
          return adminService.admin || adminFactory.saveAdminToService($localStorage.adminId)
            .then(function (response) {
              return adminService.admin;
            }, function (error) {
              console.log(error);
            });
        }
      },
      templateUrl: '/admin/dashboard.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })

    .state('editAdmin', {
      url: '/admin/edit',
      templateUrl: '/admin/edit.html',
      controller: 'AdminEditController',
      controllerAs: 'adminEdit'
    });
  }]);