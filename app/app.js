(function() {
    "use strict";

    angular.module("resumeApp", ["ngRoute"])
        .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

            $routeProvider
                .when("/",
                {
                    templateUrl: "app/AboutMe/about-me.tmpl.html",
                    controller: "AboutMeController",
                    controllerAs: "my"
                })
                .when("/skills", {
                    templateUrl: "app/Skills/skills.tmpl.html",
                    controller: "SkillsController",
                    controllerAs: "skills"
                })
                .when("/employment",
                {
                    templateUrl: "app/Employment/employment.tmpl.html",
                    controller: "EmploymentController",
                    controllerAs: "employment"
                })
                .when("/interests", {
                    templateUrl: "app/Interests/interests.tmpl.html",
                    controller: "InterestsController",
                    controllerAs: "interests"
                })
                .otherwise({
                    redirectTo: "/"
                });

            //$locationProvider.html5Mode(true);

        }]);

})();
