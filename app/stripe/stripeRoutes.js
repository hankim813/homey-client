angular
  .module('homey')

  .config(['$stateProvider', function ($stateProvider) {

    // stripeProvider.setPublishableKey('pk_test_4ermEO8C5fZ2IBBaVq8kyhIq')

    $stateProvider

    .state('payments', {
      url: '/payments',
      templateUrl: '/stripe/new.html',
      controller: 'StripeController',
      controllerAs: 'stripe'
    });
  }]);
