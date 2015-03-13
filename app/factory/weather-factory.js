angular.module('app')
    .factory('WeatherFactory', ["$q","$http",function ($q,$http) {
        var executeQueryWeather = function (url, params) {
            console.debug("running request.." + url +params);
            var baseUrl="http://api.openweathermap.org/data/2.5/";
            var dfr= $q.defer();
            
            params.mode = params.mode || "json";
            params.units = params.units || "metric";
            $http.get(baseUrl+url, {
                params:params,
            }).
            success(function(data, status, headers, config) {
                dfr.resolve(data);
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function(data, status, headers, config) {
                console.log(arguments);
                dfr.reject();
            });

            return dfr.promise;
        }

        return {
            searchCity: function (query) {
                return executeQueryWeather("find", {
                    q: query
                })
            },
            findCityById: function (cityId) {
                return executeQueryWeather("forecast/daily", {
                    id: cityId
                })
            }
        }
    }]);