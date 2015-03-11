"use strict";

(function(app) {

    var skillsController = function(dataService) {

        var vm = this;

        vm.technicalSkills = dataService.getTechnicalSkills();

    };

    app.controller("SkillsController", ["dataService", skillsController]);

})(angular.module("resumeApp"));