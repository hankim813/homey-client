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
        },

        //Gets all types of appointments from apptService
        fetchUpcoming: function (adApptFactory, adApptService) {
          return adApptService.upcoming || adApptFactory.saveUpcomingToService()
            .then(function (response) {
              return adApptService.upcoming;
            }, function (error) {
              console.log(error);
            });
        },

        fetchPast: function (adApptFactory, adApptService) {
          return adApptService.past || adApptFactory.savePastToService()
            .then(function (response) {
              return adApptService.past;
            }, function (error) {
              console.log(error);
            });
        },

        fetchUnassigned: function (adApptFactory, adApptService) {
          return adApptService.unassigned || adApptService.saveUnassignedToService()
            .then(function (response) {
              return adApptService.unassigned;
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
