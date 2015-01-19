angular
  .module('homey')

  .config(function ($stateProvider) {

    $stateProvider

    .state('edit', {
      url: '/edit',
      templateUrl: 'edit_profile/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    });
  })
