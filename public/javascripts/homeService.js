'use strict';
angular.module('home_automation')
    .factory('homeService', ['$http','$q',
        function ($http, $q) {

            var homeService = this;

            //We are reading from a sample JSON file here. Ideally it would come from a server
            homeService.getTemperature = function () {
                var deferred = $q.defer();
                $http.get("json/rooms.json").then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };

            return homeService;
        }
    ]);