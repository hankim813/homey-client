angular
  .module('homey')

  .factory('passwordFactory', [function() {
    function request (passwordForm) {
        // var uri = 'http://localhost:3000/api/mailer/passwords/contact/';
        var uri = 'https://homey-api.herokuapp.com/api/mailer/passwords/contact/';
        ajaxFactory.request(uri, 'post', passwordForm).then(function(response) {
          $state.go('update');
        }, function (error) {
          console.log(error);
        });
    }

    function update (passwordForm) {
      // var uri = 'http://localhost:3000/api/passwords/reset';
      var uri = 'https://homey-api.herokuapp.com/api/passwords/reset';
      ajaxFactory.request(uri, 'put', passwordForm).then(function (response) {
        $state.go('complete');
      }, function (error) {
        console.log(error);
      });
    }

    return {
      request: request,
      update: update
    };
  }]);