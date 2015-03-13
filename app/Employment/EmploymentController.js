(function(app) {
    "use strict";

    var employmentController = function(dataService) {

        var vm = this;

        dataService.get("employment")
            .then(function(data) {
                vm.data = data;
            });

    };

    app.controller("EmploymentController", ["dataService", employmentController]);

})(angular.module("resumeApp"));