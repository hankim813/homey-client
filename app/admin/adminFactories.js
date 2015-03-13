angular
  .module('homey')

  .factory('adminFactory', ['$http', '$q', '$localStorage', '$state', 'adminService', 'adApptFactory', function ($http, $q, $localStorage, $state, adminService, adApptFactory) {
    return {
      saveAdminToService: function (id) {
        var d = $q.defer();
        // $http.get('http://localhost:3000/api/admins/' + id)
        $http.get('https://homey-api.herokuapp.com/api/admin/' + id)
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

      delete: function (id) {
        var d = $q.defer();
        // $http.delete('http://localhost:3000/api/admins/' + id + '/delete')
        $http.delete('https://homey-api.herokuapp.com/api/admin/' + id + '/delete')
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
        var id = adminEditForm.id;

        // $http.put('http://localhost:3000/api/admins/' + id + '/edit', {
        $http.put('https://homey-api.herokuapp.com/api/admin/' + adminEditForm.id + '/edit', {
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
      },

      assign: function(appt, provider) {
        var d = $q.defer();

        // $http.post('http://localhost:3000/api/assignments', {
        $http.post('https://homey-api.herokuapp.com/api/assignments', {
          appointment_id: appt.id,
          service_provider_id: provider.id
        })
        .success(function (response) {
          d.resolve(response);
        })
        .error(function (response) {
          d.reject(response.error);
        });
        return d.promise;
      }

    };
  }]);