'use strict';

/**
 * @ngdoc function
 * @name homey.controller:MainController
 * @description
 * # MainCtrl
 * Controller of the homey
 */
angular.module('homey')
  .controller('MainController', ['fbFactory', function (fbFactory) {
    var vm = this;

    // Initialize FB javascript SDK
    fbFactory.initialize();
    
    vm.fbLogin = fbFactory.fbLogin;

  }]);
