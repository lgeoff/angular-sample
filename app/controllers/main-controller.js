angular.module('app')
    .controller('MainController', ['$scope', function ($scope) {
        $scope.testi = 'my test';
        console.log('here');
    }]);