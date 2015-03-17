angular.module('app')
    .controller('ChartController', ['$scope', 'WeatherFactory', function($scope, WeatherFactory) {
        $scope.test = 'my test';
        $scope.oneAtATime = true;
        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.searchCity = function(query) {
            WeatherFactory.searchCity(query).then(function(data) {
                $scope.cities = data.list;
                console.log(data.list);
            });
        };
    }]);