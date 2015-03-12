"use strict";

(function(app) {

    var aboutMeController = function(dataService) {

        var vm = this;

        dataService.get("about-me")
            .then(function(data) {
                vm.data = data;
            });

    };

    app.controller("AboutMeController", ["dataService", aboutMeController]);

})(angular.module("resumeApp"));