// angular
//   .module('homey', [
//     'angular-stripe'
//   ])

//   .controller ('PaymentController', function ($scope, $http, stripe) {
//   $scope.charge = function () {
//     return stripe.card.createToken($scope.payment.card)
//       .then(function (token) {
//         console.log('token created for card ending in ', token.card.last4);
//         var payment = angular.copy($scope.payment);
//         payment.card = void 0;
//         payment.token = token.id;
//         return $http.post('http://localhost:3000/payments', payment);
//       })
//       .then(function (payment) {
//         console.log('successfully submitted payment for $', payment.amount);
//       })
//       .catch(function (err) {
//         if (err.type && /^Stripe/.test(err.type)) {
//           console.log('Stripe error: ', err.message);
//         }
//         else {
//           console.log('Other error occurred, possibly with your API', err.message);
//         }
//       });
//   };
// });