angular
  .module('homey')

  .factory('adminFactory', ['$http', '$q', '$localStorage', 'adminService', function ($http, $q, $localStorage, adminService) {
    return {
      saveAdminToService: function (id) {
        console.log(id);
        var d = $q.defer();
        $http.get('http://localhost:3000/api/admin/' + id)
          .success(function (response) {
            adminService.admin = response;
            adminService.admin.birthday = new Date(response.birthday);
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      delete: function (_id) {
        var d = $q.defer();
        $http.delete('http://localhost:3000/api/admin/' + _id + '/delete')
          .success(function (response) {
            delete $localStorage.token;
            delete $localStorage.adminId;
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      edit: function(adminEditForm) {
        var d = $q.defer();

        $http.put('http://localhost:3000/api/admin/' + adminEditForm.id + '/edit', {
          email: adminEditForm.email,
          first_name: adminEditForm.first_name,
          last_name: adminEditForm.last_name,
          gender: adminEditForm.gender,
          birthday: adminEditForm.birthday,
          phone: adminEditForm.phone,
        })
        .success(function (response) {
          adminService.admin = response;
          d.resolve(response);
        }).error(function (response) {
          d.reject(response.error);
        });
        return d.promise;
      }

    };
  }]);