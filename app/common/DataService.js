(function(app) {
    "use strict";

    var dataService = function($q, $http) {

        var baseUrl = "./app/data/";

        return {

            get: function(fileName) {

                var dfd = $q.defer();

                $http.get(baseUrl + fileName + ".json")
                    .success(function(data) {
                        dfd.resolve(data);
                    })
                    .catch(function(data) {
                        dfd.reject(data.error);
                    });

                return dfd.promise;

            }

        };

    };

    app.factory("dataService", ["$q", "$http", dataService]);

})(angular.module("resumeApp"));