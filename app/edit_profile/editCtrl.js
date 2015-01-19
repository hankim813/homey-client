angular
  .module('homey')

  .controller('EditController', ['user', 'userService', function (user, userService) {

    var vm = this;
    vm.edit = userService.user;
  }]);