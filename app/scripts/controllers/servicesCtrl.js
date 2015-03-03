angular
	.module('homey')

	.controller('ServiceController', [function () {
		var vm = this;

		vm.list = [
			{title: 'Home Cleaning', class: 'cleaning', icon: 'cleaning-icon.png', state: 'homeCleaning'},
			{title: 'Car Wash', class: 'carwash', icon: 'car-wash.png', state: 'carWash'},
			{title: 'Office Cleaning', class: 'office', icon: 'office-icon.png', state: 'office'},
			{title: 'Personal Chefs', class: 'chefs', icon: 'cooking-icon.png', state: 'chef'},
			{title: 'Painting', class: 'painting', icon: 'painting-icon.png', state: 'painting'},
			{title: 'Electrical', class: 'electric', icon: 'electric-icon.png', state: 'electric'},
			{title: 'Chauffeur', class: 'driver', icon: 'driver-icon.png', state: 'driver'},
			{title: 'Plumbing', class: 'plumbing', icon: 'plumbing-icon.png', state: 'plumbing'},
			{title: 'Security Guards', class: 'security', icon: 'security-icon.png', state: 'security'},
			{title: 'Gardening', class: 'gardening', icon: 'gardening-icon.png', state: 'gardening'},
			{title: 'Mechanical', class: 'mechanical', icon: 'mechanical-icon.png', state: 'mechanical'},
			{title: 'Contractor Job', class: 'contractor', icon: 'contractor-icon.png', state: 'contractor'},
		];
	}]);