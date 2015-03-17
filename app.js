angular.module('app', ['ui.bootstrap', 'ngRoute', 'ui.chart','ui.grid'])
   .config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        }).
        when('/weather', {
            templateUrl: 'app/views/chart.html',
            controller: 'ChartController'
        }).
          when('/city/:cityId', {
              templateUrl: 'app/views/city.html',
              controller: 'CityController'
          }).
        when('/users', {
            templateUrl: 'app/views/users.html',
            controller: 'UsersController'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);