angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('dashboard', {
      url: '/dashboard',
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
      templateUrl: '/app/serviceProviders/dashboard.html',
      controller: 'serviceProviderController',
      controllerAs: 'sp'
    })

    .state('editServiceProvider', {
      url: '/serviceProvider/edit',
      templateUrl: '/app/serviceProviders/edit.html',
      controller: 'serviceProviderEditController',
      controllerAs: 'spEdit'
    });
  })

