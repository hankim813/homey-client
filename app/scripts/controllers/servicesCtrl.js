angular
	.module('homey')

	.controller('ServiceController', [function () {
		var vm = this;

		vm.list = [
			{title: 'Home Cleaning', class: 'cleaning bg-sz-cover', icon: 'cleaning-icon.png', state: 'homeCleaning'},
			{title: 'Car Wash', class: 'carwash bg-sz-cover', icon: 'car-wash.png', state: 'carWash'},
			{title: 'Office Cleaning', class: 'office bg-sz-cover', icon: 'office-icon.png', state: 'officeCleaning'},
			{title: 'Personal Chefs', class: 'chefs bg-sz-cover', icon: 'cooking-icon.png', state: 'chef'},
			{title: 'Painting', class: 'painting bg-sz-cover', icon: 'painting-icon.png', state: 'painting'},
			{title: 'Electrical', class: 'electric bg-sz-cover', icon: 'electric-icon.png', state: 'electric'},
			{title: 'Chauffeur', class: 'driver bg-sz-cover', icon: 'driver-icon.png', state: 'driver'},
			{title: 'Plumbing', class: 'plumbing bg-sz-cover', icon: 'plumbing-icon.png', state: 'plumbing'},
			{title: 'Security Guards', class: 'security bg-sz-cover', icon: 'security-icon.png', state: 'security'},
			{title: 'Gardening', class: 'gardening bg-sz-cover', icon: 'gardening-icon.png', state: 'gardening'},
			{title: 'Mechanical', class: 'mechanical bg-sz-cover', icon: 'mechanical-icon.png', state: 'mechanical'},
			{title: 'Contractor Job', class: 'contractor bg-sz-cover', icon: 'contractor-icon.png', state: 'contractor'},
		];
	}]);