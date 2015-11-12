angular.module('demoModule', [])


    .controller('demoController', ['$scope', '$http', function ($scope, $http) {
        var http = $http(
            {
                method: 'GET',
                url: '/report.json'
            }
        ).success(function (data, status) {
                $scope.result = data;
            })
    }]);