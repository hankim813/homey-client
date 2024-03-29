angular
	.module('homey')

	.controller('FaqController', [function () {
		var vm = this;

		
		vm.insurance = [
			{
				q: 'What should I do if something is damaged?',
				a: 'Not to worry. All our Homey staff are insured. While damages are not common occurrences, we do understand that mistakes can happen. Homey will take care of any damages that may occur due to any proven negligence from one of our team members.'
			},
			{
				q: 'What should I do if something is missing?',
				a: 'In the unlikely event that something goes missing, we strongly encourage our users to report the matter to us as soon as possible via our contact page so we can begin our investigations immediately.'
			}
		];

		vm.service = [
			{
				q: 'Do cleaners bring supplies? What if I want to use my own supplies?',
				a: 'Don’t worry, we bring everything that we need to get the job done. However, if you have specific supplies that you would rather have us use we encourage you to supply them to our staff upon their arrival.'
			},
			{
				q: 'When can I expect my professional to arrive?',
				a: 'Unless otherwise notified in advance, your Homey professional will arrive at the time you have stipulated in your booking.'
			},
			{
				q: 'What are your hours of operation?',
				a: 'All services operate from 6 AM to 9PM (except for Drivers). However, you can make a booking anytime of the day, seven days a week.'
			}, 
			{
				q: 'Do I need to be home for my booking?',
				a: 'No you do not need to be home for your booking. As long as you have facilitated everything that is needed for our Homey staff, we will arrive on time, get the job done and leave everything just how you like it. We strongly encourage our users to indicate during the booking whether they will not be home when the Homey team arrives.'
			}
		];

		vm.general = [
			{
				q: 'How do our pricing work?',
				a: 'Our pricing is based off an internal calculator that we have built to automatically calculate the workload and time required for a particular job. You can see the calculations when you are booking an appointment.'
			},
			{
				q: 'How do I file a claim or complaint?',
				a: 'We have a variety of different ways to file complaints. Please feel free to directly contact us via phone (0701946405) or via our contact page with whatever complaints you may have. We will work hard to find the resolution as soon as possible.'
			},
			{
				q: 'What is your cancellation and rescheduling policy?',
				a: 'Currently, we do not give any refunds. If you are unhappy with our work, we will get a new team of professionals to redo the service, to ensure your satisfaction. As far as scheduling, you are free to edit your scheduling so long as you give six hour notice in advance.'
			},
			{
				q: 'Are Homey professionals insured?',
				a: 'All our Homey professionals are insured in case of any injuries that may occur while at work. In addition to this, in the unlikely event of any loss or damages that may occur to a customer\'s property as a result of any proven negligence by Homey professionals, the Homey insurance will cover it.'
			},
			{
				q: 'Are Homey professionals experienced in their field?',
				a: 'Yes all Homey professionals are required to have at least 2-3 years experience in their field.'
			},
			{
				q: 'Are Homey professionals background checked?',
				a: 'Yes. In order to join the Homey staff, all professionals are required to provide certificates of good conduct from the various CID offices to ensure that they have absolutely no criminal record.'
			} 
		];

		attachToggler();

		function attachToggler () {
			for (var i = 0; i < vm.general.length; i++) {
				vm.general[i].showAnswer = false;
			}

			for (var i = 0; i < vm.insurance.length; i++) {
				vm.insurance[i].showAnswer = false;
			}

			for (var i = 0; i < vm.service.length; i++) {
				vm.service[i].showAnswer = false;
			}
		};

	}]);