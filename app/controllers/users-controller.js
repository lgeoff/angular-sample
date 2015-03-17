angular.module('app')
    .controller('UsersController', ['$scope','$rootScope', 'UsersFactory', function($scope, $rootScope, UsersFactory) {
        $scope.testi = 'my test';
        console.log('here');

        $scope.gridOptions = {
            data: 'myData'
        };

        $scope.addUser = function(user) {
            UsersFactory.addUser(user).then(function() {
                $scope.refreshUsers();
            });
            $scope.user = {};
        };

        $scope.removeUser = function(userRef) {
            UsersFactory.removeUser(userRef).then(function() {
                $scope.refreshUsers();
            });

        };

        /*Order of sort table and field to use*/
        $scope.sortField='id';
        $scope.order=false;
        $scope.changeOrder=function(){
            $scope.order=!$scope.order;
        };
        $scope.setSortField=function(field){
            $scope.sortField=field;
        };

        $scope.refreshUsers=function(){
            UsersFactory.getUsers().then(function(users) {
                $scope.myData = [];
                for (var user in users) {
                    var tmpUser=users[user];
                    tmpUser.userRef=user;
                    $scope.myData.push(users[user]);
                }
            });
        };
        $scope.refreshUsers();
        $scope.loading=false;
        $rootScope.$on('httpCallStarted',function(){
            $scope.loading=true;


        });
        $rootScope.$on('httpCallStopped',function(){
            $scope.loading=false;

        });


    }]);