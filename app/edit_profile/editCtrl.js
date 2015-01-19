angular
  .module('homey')

  .controller('EditController', ['user', 'userService', function (user, userService) {

    var vm = this;
    vm.editForm = {};

    vm.edit = function () {
      console.log(vm.editForm);
      EditFactory.edit(vm.editForm).then(function () {
        vm.editForm = {};
        $state.go('profile');
      });
    };
  }]);