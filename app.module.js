var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jep',[
    'ngRoute',
    'jepApp'
  ])
  .config(function($routeProvider) {

    $routeProvider
      .when('/',{
        templateUrl: "main.html",
        controller: "HomeController"
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require("./jepApp");
