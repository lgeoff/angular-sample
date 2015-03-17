angular.module('app')
    .factory('UsersFactory', ["$q", "$http",'$rootScope', function($q, $http,$rootScope) {
        var URL = 'https://radiant-inferno-3843.firebaseio.com/userss';

        var getUsers = function() {
            console.debug("running request.." + URL+".json");
            var dfr = $q.defer();
            $rootScope.$broadcast('httpCallStarted');
            $http.get(URL+".json").
            success(function(data, status, headers, config) {
                dfr.resolve(data);
                $rootScope.$broadcast('httpCallStopped');
            }).
            error(function(data, status, headers, config) {
                console.log(arguments);
                dfr.reject();
                $rootScope.$broadcast('httpCallStopped');
            });
            return dfr.promise;
        };

        var addUser = function(user) {
            console.debug("running request.." + URL+".json");
            if (!user.id) {
                user.id = Math.floor(Math.random() * 40000);
            }
            var dfr = $q.defer();
            $rootScope.$broadcast('httpCallStarted');
            $http.post(URL+".json", user).
            success(function(data, status, headers, config) {
                dfr.resolve(data);
                $rootScope.$broadcast('httpCallStopped');
            }).
            error(function(data, status, headers, config) {
                console.log(arguments);
                dfr.reject();
                $rootScope.$broadcast('httpCallStopped');
            });
            return dfr.promise;
        };

        var removeUser = function(userRef) {
            var dfr = $q.defer();
            $rootScope.$broadcast('httpCallStarted');
            $http.delete(URL + "/" + userRef+".json").
            success(function(data, status, headers, config) {
                dfr.resolve(data);
                $rootScope.$broadcast('httpCallStopped');
            }).
            error(function(data, status, headers, config) {
                console.log(arguments);
                dfr.reject();
                $rootScope.$broadcast('httpCallStopped');
            });
            return dfr.promise;
        };

        return {
            addUser: addUser,
            getUsers: getUsers,
            removeUser: removeUser
        };
    }]);