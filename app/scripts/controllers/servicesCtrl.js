angular
	.module('homey')

	.controller('ServiceController', [function () {
		var vm = this;

		vm.list = [
			{title: 'Home Cleaning', class: 'cleaning', icon: 'cleaning-icon.png', state: 'homeCleaning'},
			{title: 'Car Wash', class: 'carwash', icon: 'car-wash.png', state: 'carWash'},
			{title: 'Plumbing', class: 'plumbing', icon: 'plumbing-icon.png', state: 'plumbing'},
			{title: 'Electrical', class: 'electric', icon: 'electric-icon.png', state: 'electric'},
			{title: 'Painting', class: 'painting', icon: 'painting-icon.png', state: 'painting'},
			{title: 'Personal Chefs', class: 'chefs', icon: 'cooking-icon.png', state: 'chef'},
			{title: 'Security Guards', class: 'security', icon: 'security-icon.png', state: 'security'},
		];
	}]);