angular.module('app')
    .factory('UsersFactory', ["$q", "$http", function ($q, $http) {
        var URL =  'https://radiant-inferno-3843.firebaseio.com/userss.json';

         var getUsers = function () {
             console.debug("running request.." + URL);
            var dfr= $q.defer();
            $http.get(URL).
            success(function(data, status, headers, config) {
                dfr.resolve(data);
            }).
            error(function(data, status, headers, config) {
                console.log(arguments);
                dfr.reject();
            });
            return dfr.promise;
        }

         var addUser = function (user) {
             console.debug("running request.." + URL);
             var dfr = $q.defer();
             $http.post(URL,user).
             success(function (data, status, headers, config) {
                 dfr.resolve(data);
             }).
             error(function (data, status, headers, config) {
                 console.log(arguments);
                 dfr.reject();
             });
             return dfr.promise;
         }

         return {
             addUser: addUser,
             getUsers: getUsers
         }
    }]);