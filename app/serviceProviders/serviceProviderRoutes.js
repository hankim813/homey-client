angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('spDashboard', {
      url: '/sp/dashboard',
      resolve: {
        fetchServiceProvider: function (spFactory, spService, $localStorage) {
          return spService.sp || spFactory.saveSPToService($localStorage.spId)
            .then(function (response) {
              return spService.sp;
            }, function (error) {
              console.log(error);
            });
        },

        // upcomingAppointments: function (spApptFactory, spApptService, $localStorage) {
        //   return spApptService.appointments || spApptFactory.saveUpcomingToService($localStorage.spId)
        //     .then(function (response) {
        //       return spApptService.upcoming;
        //     }, function (error) {
        //       console.log(error);
        //     });
        // },

        // pastAppointments: function (spApptFactory, spApptService, $localStorage) {
        //   return spApptService.appointments || spApptFactory.savePastToService($localStorage.spId)
        //     .then(function (response) {
        //       return spApptService.past;
        //     }, function (error) {
        //       console.log(error);
        //     });
        // }
      },
      templateUrl: '/serviceProviders/dashboard.html',
      controller: 'serviceProviderController',
      controllerAs: 'sp'
    })

    .state('spSettings', {
      url: '/homeys/settings',
      templateUrl: '/serviceProviders/settings.html'
    })

    .state('editServiceProvider', {
      url: '/serviceProvider/edit',
      templateUrl: '/serviceProviders/edit.html',
      controller: 'serviceProviderEditController',
      controllerAs: 'spEdit'
    });
  })

