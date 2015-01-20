angular
  .module('homey')

  .factory('editFactory', ['$http', '$q', function ($http, $q) {

    return {

      edit: function(editForm) {
        var d = $q.defer();

        $http.put('http://localhost:3000/api/users/edit', {
          email: editForm.email,
          first_name: editForm.first_name,
          last_name: editForm.last_name,
          age: editForm.age,
          phone: editForm.phone
        })
        .success(function (response) {
          console.log('success', response);
          d.resolve(response.user);
        }).error(function (response) {
          console.log('error', response);
          d.reject(response.error);
        });
        return d.promise;
      }
    }
  }]);