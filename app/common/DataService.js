"use strict";

(function(app) {

    var dataService = function($firebaseObject) {

        var baseUrl = "https://glaring-heat-4091.firebaseio.com/data";

        var dataFactory = {};

        dataFactory.seed = function() {
            var seedRef = new Firebase(baseUrl);
            var fb = $firebaseObject(seedRef);

            fb.aboutMe = {
                name: "John Beadles",
                location: "Austin, TX"
            };

            fb.$save();
        };

        dataFactory.getAboutMe = function() {
            var aboutMeRef = new Firebase(baseUrl + "/aboutMe");
            return $firebaseObject(aboutMeRef);
        };

        return dataFactory;

    };

    app.factory("dataService", ["$firebaseObject", dataService]);

})(angular.module("resumeApp"));