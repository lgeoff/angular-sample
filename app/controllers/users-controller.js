angular.module('app')
    .controller('UsersController', ['$scope','UsersFactory', function ($scope,UsersFactory) {
        $scope.testi = 'my test';
        console.log('here');

        $scope.gridOptions = {
            data: 'myData'
        };

        $scope.addUser = function (user) {
            UsersFactory.addUser(user).then(function () {
                $scope.myData.push(user);
            });
            $scope.user = {};
        }

        UsersFactory.getUsers().then(function (users) {
            $scope.myData = [];
            for (user in users) {
                $scope.myData.push(users[user]);
            }
        })
    }]);