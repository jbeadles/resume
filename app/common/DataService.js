"use strict";

(function(app) {

    var dataService = function($firebaseObject, $firebaseArray) {

        var baseUrl = "https://glaring-heat-4091.firebaseio.com/data";

        var dataFactory = {};

        var buildFbObject = function(url,type) {
            type = type || "obj";

            if(type === "obj") {
                return $firebaseObject(new Firebase(baseUrl + "/" + url));
            }

            if(type === "array") {
                return $firebaseArray(new Firebase(baseUrl + "/" + url));
            }
        };

        dataFactory.getAboutMe = function() {
            return buildFbObject("aboutMe");
        };

        dataFactory.getSummaryOfQualifications = function() {
            return buildFbObject("summaryOfQualifications");
        };

        dataFactory.getWorkExperience = function() {
            return buildFbObject("workExperience");
        };

        dataFactory.getTechnicalSkills = function() {
            return buildFbObject("technicalSkills");
        };

        dataFactory.getEducation = function() {
            return buildFbObject("education");
        };

        return dataFactory;

    };

    app.factory("dataService", ["$firebaseObject", "$firebaseArray", dataService]);

})(angular.module("resumeApp"));