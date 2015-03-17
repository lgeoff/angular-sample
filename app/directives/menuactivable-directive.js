angular.module('app')
	.directive('menuactivable', ['$location','$rootScope', function($location,$rootScope) {
		var link = function(scope, element, attrs) {
			var path = attrs.href;
			var clazz = attrs.activeLink;

			path = path.substring(1); //hack because path does not return including hashbang
			scope.location = location;

			$rootScope.$on('$locationChangeStart', function() {
				console.log('in location change'+path +" and "+$location.path());
				if (path == $location.path()) {
					element.addClass(clazz);
				} else {
					element.removeClass(clazz);
				}
			});
		};

		return {
			link: link,
			restrict:'A'
		};
	}]);