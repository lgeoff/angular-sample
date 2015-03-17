angular.module('app').filter('firstcapitalletter', function() {
	return function(input) {
		input = input || '';
		return input.charAt(0).toUpperCase() + input.slice(1);
	};
});