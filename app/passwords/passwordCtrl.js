angular
  .module('homey')

  .controller('PasswordController', ['passwordFactory', 'userService', function (passwordFactory, userService) {

    var vm = this;
    vm.passwordForm = {};
    vm.user = userService.user;

    vm.request = passwordFactory.request;
    vm.update = passwordFactory.update;
    vm.thanks = passwordFactory.thanks;
  }]);