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

    vm.fbLogin = fbFactory.fbLogin;
  }]);
