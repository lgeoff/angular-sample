angular.module('app')
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.testi = 'my test';
        console.log('here');
    }]);