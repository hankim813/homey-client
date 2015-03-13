angular
  .module('homey')

  .config(['$stateProvider', '$httpProvider', function ($stateProvider, $httpProvider) {

    $stateProvider

    .state('adminPastDashboard', {
      url: '/admins/dashboard/past',
      templateUrl: '/admin/pastDashboard.html'
    })

    .state('adminUpcomingDashboard', {
      url: '/admins/dashboard/upcoming',
      resolve: {
        fetchAdmin: function (adminFactory, adminService, $localStorage) {
          return adminService.admin || adminFactory.saveAdminToService($localStorage.adminId)
            .then(function (response) {
              return adminService.admin;
            }, function (error) {
              console.log(error);
            });
        },

        providers: function (spFactory, spService) {
          return spService.providers || spFactory.saveProvidersToService()
            .then(function (response) {
              return spService.providers;
            }, function (error) {
              console.log(error);
            });
        },

        //Gets all types of appointments from apptService
        upcomingAppointments: function (adApptFactory, adApptService) {
          return adApptService.upcoming || adApptFactory.saveUpcomingToService()
            .then(function (response) {
              return adApptService.upcoming;
            }, function (error) {
              console.log(error);
            });
        },

        pastAppointments: function (adApptFactory, adApptService) {
          return adApptService.past || adApptFactory.savePastToService()
            .then(function (response) {
              return adApptService.past;
            }, function (error) {
              console.log(error);
            });
        },

        unassignedAppointments: function (adApptFactory, adApptService) {
          return adApptService.unassigned || adApptFactory.saveUnassignedToService()
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

    .state('adminUserDB', {
      url: '/admins/user-db',
      templateUrl: '/admin/user-db.html'
    })

    .state('adminHomeyDB', {
      url: '/admins/homey-db',
      templateUrl: '/admin/homey-db.html'
    })

    .state('adminSettings', {
      url: '/admins/settings',
      templateUrl: '/admin/settings.html'
    })

    .state('adminDiscounts', {
      url: '/admins/discounts',
      templateUrl: '/admin/discounts.html'
    })

    .state('editAdmin', {
      url: '/admins/edit',
      templateUrl: '/admin/edit.html',
      controller: 'AdminEditController',
      controllerAs: 'adminEdit'
    });
  }]);
