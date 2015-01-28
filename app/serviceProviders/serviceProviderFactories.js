angular
  .module('homey')

  .factory('spFactory', ['$http', '$q', '$localStorage', 'spService', function ($http, $q, $localStorage, spService) {
    return {
      saveSPToService: function (id) {
        var d = $q.defer();
        $http.get('http://localhost:3000/api/serviceProviders/' + id)
          .success(function (response) {
            spService.sp = response;
            spService.sp.birthday = new Date(response.birthday);
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      delete: function (_id) {
        var d = $q.defer();
        $http.delete('http://localhost:3000/api/serviceProviders/' + _id + '/delete')
          .success(function (response) {
            delete $localStorage.token;
            delete $localStorage.spId;
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      edit: function(spEditForm) {
        var d = $q.defer();

        $http.put('http://localhost:3000/api/serviceProviders/' + spEditForm.id + '/edit', {
          email: spEditForm.email,
          first_name: spEditForm.first_name,
          last_name: spEditForm.last_name,
          gender: spEditForm.gender,
          age: spEditForm.age,
          phone: spEditForm.phone,
          birthday: spEditForm.birthday,
          address: spEditForm.address,
          service: spEditForm.service,
          years_experience: spEditForm.years_experience
        })
        .success(function (response) {
          spService.sp = response;
          d.resolve(response.sp);
        }).error(function (response) {
          d.reject(response.error);
        });
        return d.promise;
      }

    };
  }]);