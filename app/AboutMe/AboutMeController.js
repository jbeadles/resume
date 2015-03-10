'use strict';

(function(app) {

    var aboutMeController = function(dataService) {
        var vm = this;
        vm.data = dataService.getAboutMe();

        var init = function() {
            dataService.seed();
        }();
    };

    app.controller("AboutMeController", ["dataService", aboutMeController]);

})(angular.module("resumeApp"));