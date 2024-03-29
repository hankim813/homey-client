angular
  .module('homey')

  .factory('spFactory', ['$http', '$q', '$localStorage', 'spService', function ($http, $q, $localStorage, spService) {
    return {
      saveSPToService: function (id) {
        var d = $q.defer();
        // $http.get('http://localhost:3000/api/serviceProviders/' + id)
        $http.get('https://homey-api.herokuapp.com/api/serviceProviders/' + id)
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

      saveProvidersToService: function () {
        var d = $q.defer();
        // $http.get('http://localhost:3000/api/serviceProviders')
        $http.get('https://homey-api.herokuapp.com/api/serviceProviders')
          .success(function (response) {
            spService.providers = response;
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      delete: function (id) {
        var d = $q.defer();
        // $http.delete('http://localhost:3000/api/serviceProviders/' + id + '/delete')
        $http.delete('https://homey-api.herokuapp.com/api/serviceProviders/' + id + '/delete')
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
        var id = spEditForm.id;

        // $http.put('http://localhost:3000/api/serviceProviders/' + id + '/edit', {
        $http.put('https://homey-api.herokuapp.com/api/serviceProviders/' + spEditForm.id + '/edit', {
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