angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('adminDashboard', {
      url: '/admin/dashboard',
      resolve: {
        fetchAdmin: function (adminService) {
          return adminService.admin;
        }
      },
      templateUrl: '/admin/dashboard.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })

    .state('edit', {
      url: '/admin/edit',
      resolve: {
        fetchAdmin: function (adminService) {
          return adminService.admin;
        }
      },
      templateUrl: '/admin/edit.html',
      controller: 'AdminEditController',
      controllerAs: 'adminEdit'
    });
  })