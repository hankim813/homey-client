angular
  .module('homey')

  .controller('EditController', ['$state','user', 'userService', 'editFactory', function ($state,user, userService, editFactory) {

    var vm = this;
    vm.editForm = {};
    vm.info = userService.user;
    console.log(vm.info.name);

    vm.editUser = function () {
      console.log(vm.editForm);
      editFactory.edit(vm.editForm).then(function () {
        vm.editForm = {};
        $state.go('profile');
      });
    };
  }]);