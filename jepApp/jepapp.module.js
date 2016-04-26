var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jepApp',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/jepapp',{
        templateUrl: "../jepApp/templates/index.html",
        controller: "HomeController as HomeCtrl",
        controllerAs: "HomeCtrl"
      })
      .when('/question',{
        templateUrl: "../jepApp/templates/questions.html",
        controller: "QuestionController"
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
