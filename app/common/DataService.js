"use strict";

(function(app) {

    var dataService = function($q, $http) {

        var baseUrl = "./app/data/";

        return {

            get: function(fileName) {

                var dfd = $q.defer();

                $http.get(baseUrl + fileName + ".json")
                    .success(function(data) {
                        dfd.resolve(data);
                    })
                    .error(function(err) {
                        dfd.reject(err);
                    });

                return dfd.promise;

            }

        };

    };

    app.factory("dataService", ["$q", "$http", dataService]);

})(angular.module("resumeApp"));