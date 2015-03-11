"use strict";

(function(app) {

    var skillsController = function(dataService) {

        var vm = this;

        vm.test = "Test Success!";

    };

    app.controller("SkillsController", ["dataService", skillsController]);

})(angular.module("resumeApp"));