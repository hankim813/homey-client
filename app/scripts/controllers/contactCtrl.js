angular
	.module('homey')

	.controller('ContactController', ['$state', 'MailerFactory', function ($state, MailerFactory) {
		var vm = this;

		vm.form = {};
		vm.happy = false;
		vm.ecstatic = false;
		vm.confused = false;
		vm.frustrated = false;
		vm.angry = false;
		vm.check = check;
		vm.sendEmail = sendEmail;

		function sendEmail () {
			MailerFactory.sendContact(vm.form).then(function (response) {
				vm.form = {};
				$state.go('thankyou');
			}, function (error) {
				console.log(error);
			});
		};

		function check (val) {
			switch (val) {
				case 'happy':
					vm.form.mood = 'happy';
					vm.happy = true;
					vm.ecstatic = false;
					vm.confused = false;
					vm.frustrated = false;
					vm.angry = false;
					break;
				case 'ecstatic':
					vm.form.mood = 'ecstatic';
					vm.happy = false;
					vm.ecstatic = true;
					vm.confused = false;
					vm.frustrated = false;
					vm.angry = false;
					break;
				case 'confused':
					vm.form.mood = 'confused';
					vm.happy = false;
					vm.ecstatic = false;
					vm.confused = true;
					vm.frustrated = false;
					vm.angry = false;
					break;
				case 'frustrated':
					vm.form.mood = 'frustrated';
					vm.happy = false;
					vm.ecstatic = false;
					vm.confused = false;
					vm.frustrated = true;
					vm.angry = false;
					break;
				case 'angry':
					vm.form.mood = 'angry';
					vm.happy = false;
					vm.ecstatic = false;
					vm.confused = false;
					vm.frustrated = false;
					vm.angry = true;
					break;
			}
		}
	}]);