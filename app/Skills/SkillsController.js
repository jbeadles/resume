(function(app) {
    "use strict";

    var skillsController = function(dataService) {

        var vm = this;

        dataService.get("skills")
            .then(function(data) {
                vm.data = data;
            });

    };

    app.controller("SkillsController", ["dataService", skillsController]);

})(angular.module("resumeApp"));