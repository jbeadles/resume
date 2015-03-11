"use strict";

(function() {

    angular.module("resumeApp", ["ngRoute", "firebase"])
        .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

            $routeProvider
                .when("/",
                {
                    templateUrl: "app/AboutMe/about-me.tmpl.html",
                    controller: "AboutMeController",
                    controllerAs: "my"
                })
                .when("/employment",
                {
                    templateUrl: "app/Employment/employment.tmpl.html",
                    controller: "EmploymentController",
                    controllerAs: "employment"
                })
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode(true);

        }]);

})();
