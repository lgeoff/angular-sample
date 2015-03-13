angular.module('app')
    .directive('meteograph', [function () {

        var formatDate = function (dt) {
            var x = new Date(dt * 1000);
            return (x.getMonth() + 1) + "/" + x.getDate() + "/" + x.getFullYear();
        }

        var controller = function ($scope) {

            $scope.getFormattedData = function (city, type) {
                return [$scope.city.map(function (o) {
                    return new Array(formatDate(o.dt), o[type]);
                })];
            }

            $scope.shrinkedData = function (n, city, type) {
                var data = $scope.getFormattedData(city, type);
                return data.map(function (arr) { return arr.length < n ? arr : arr.slice(0, n) });
            }

        };
        var linker = function (scope, element, attrs) {
            scope.chartOptions = {
                axes: {
                    xaxis: {
                        tickOptions: {
                            formatString: '%F'
                        },
                        renderer: jQuery.jqplot.DateAxisRenderer,
                        rendererOptions: {
                            // Put data labels on the pie slices.
                            // By default, labels show the percentage of the slice.
                            showDataLabels: true
                        }
                    }
                }, series: [
          {
              // Change our line width and use a diamond shaped marker.
              lineWidth: 2,
              markerOptions: { style: 'dimaond' }
          }],
                legend: { show: true, location: 'e' }
            };
        }
        return {
            restrict: 'E',
            scope: {
                city: '='
            },
            templateUrl: 'app/directives/views/meteograph-view.html',
            link: linker,
            controller: controller
        }
    }]);