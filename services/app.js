var app = angular.module("workingzeitApp", ["ngRoute"]);
      app.config(function($routeProvider) {
          $routeProvider
              .when("/", {
                  templateUrl: "views/main.html"
              })
              .when("/zeiterfassung", {
                  templateUrl: "views/zeiterfassung.html",
                  controller: "zeiterfassenCtrl"
              })
              .when("/zeitreview", {
                  templateUrl: "views/zeitreview.html",
                  controller:"zeitreviewCtrl"
              });
      });
