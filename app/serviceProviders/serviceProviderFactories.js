angular
  .module('homey')

  .factory('serviceProviderFactory', ['$http', '$q', '$localStorage', 'serviceProviderService', function ($http, $q, $localStorage, serviceProviderService) {
    return {
      saveServiceProviderToService: function (id) {
        var d = $q.defer();
        $http.get('http://localhost:3000/api/serviceProviders/' + id)
          .success(function (response) {
            serviceProviderService.serviceProvider = response;
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      deleteServiceProvider: function (_id) {
        var d = $q.defer();
        $http.delete('http://localhost:3000/api/serviceProviders/' + _id + '/delete')
          .success(function (response) {
            delete $localStorage.token;
            delete $localStorage.serviceProviderId;
            d.resolve(response);
          })
          .error(function (response) {
            d.reject(response);
          });
          return d.promise;
      },

      editServiceProvider: function(spEditForm) {
        var d = $q.defer();

        $http.put('http://localhost:3000/api/serviceProviders/edit', {
          id: spEditForm.id,
          email: spEditForm.email,
          first_name: spEditForm.first_name,
          last_name: spEditForm.last_name,
          gender: spEditForm.gender,
          age: spEditForm.age,
          phone: spEditForm.phone
        })
        .success(function (response) {
          serviceProviderService.sp = response;
          d.resolve(response.sp);
        }).error(function (response) {
          d.reject(response.error);
        });
        return d.promise;
      }

    };
  }]);