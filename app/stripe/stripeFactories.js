angular
  .module('homey')

  .factory('stripeFactory', ['ajaxFactory', function (ajaxFactory) {
    function chargeCustomer (token) {
      // var uri = 'http://localhost:3000/api/charges/stripe';
      var uri = 'https://homey-api.herokuapp.com/api/charges/stripe';
      ajaxFactory.request(uri, 'post', {stripeToken: token}).then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      })
    }

    return {
      chargeCustomer: chargeCustomer
    }
  }]);