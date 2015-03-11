"use strict";

(function(app) {

    var employmentController = function(dataService) {

        var vm = this;

        vm.data = dataService.getWorkExperience();

    };

    app.controller("EmploymentController", ["dataService", employmentController]);

})(angular.module("resumeApp"));