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
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode(true);

        }]);

})();
