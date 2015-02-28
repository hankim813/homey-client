angular
  .module('homey')

  .config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {

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