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
        }
      },
      templateUrl: '/serviceProviders/dashboard.html',
      controller: 'serviceProviderController',
      controllerAs: 'sp'
    })

    .state('editServiceProvider', {
      url: '/serviceProvider/edit',
      templateUrl: '/serviceProviders/edit.html',
      controller: 'serviceProviderEditController',
      controllerAs: 'spEdit'
    });
  })

