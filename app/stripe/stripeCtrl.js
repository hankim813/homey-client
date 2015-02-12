angular
  .module('homey')

  .controller ('StripeController', ['stripeFactory', function (stripeFactory) {
    var vm = this;
    var $form = $('#payment-form');
    vm.createStripeToken = createStripeToken;
    function stripeResponseHandler (status, response) {
      if (status == 200) {
        stripeFactory.chargeCustomer(response.id);
      } else {
        console.log('response', response.error.message);
        console.log('status', status);
        console.log('failure');
      }
    };

    function createStripeToken () {
      Stripe.setPublishableKey('pk_live_n41TBlX0lvSs04xM9Kh983ai');
      Stripe.card.createToken($form, stripeResponseHandler);
    };

  }]);

