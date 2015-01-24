angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      resolve: {
        serviceProvider: function (spProviderService) {
          return spProviderService.serviceProvider;
        }
      },
      templateUrl: 'serviceProviders/dashboard.html',
      controller: 'serviceProviderController',
      controllerAs: 'serviceProvider'
    })

    .state('editServiceProvider', {
      url: '/serviceProvider/edit',
      resolve: {
        serviceProvider: function (spProviderService) {
          return serviceProviderService.serviceProvider;
        }
      },
      templateUrl: 'serviceProviders/edit.html',
      controller: 'serviceProviderEditController',
      controllerAs: 'spEdit'
    });
  })

