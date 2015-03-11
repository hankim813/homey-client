angular
	.module('homey')

	.factory('Neighborhoods', [function () {
		return {
			list: [
				{id: 0, name: 'Kilimani'},
				{id: 1, name: 'Lavington'},
				{id: 2, name: 'Westlands'},
				{id: 3, name: 'CBD'},
				{id: 4, name: 'Upperhill'},
				{id: 5, name: 'Karen'},
				{id: 6, name: 'Runda'},
				{id: 7, name: 'Eastlands'}
			]
		}
	}]);