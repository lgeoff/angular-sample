angular.module('app')
	.controller('CityController', ['$scope', '$routeParams', "WeatherFactory", function($scope, $routeParams, WeatherFactory) {
		$scope.testi = 'my test';
		$scope.isLoaded = false;
		WeatherFactory.findCityById($routeParams.cityId).then(function(data) {
			$scope.city = data.list;
			$scope.isLoaded = true;
		});

	}]);