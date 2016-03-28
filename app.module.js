var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jep',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/question',{
        templateUrl: "templates/questions.html",
        controller: "QuestionController"
      })
      // .when('/404',{
      //   template: '<h1> You messed up, loser </h1>',
      //   controller: 'WangController'
      // })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./controllers/home.controller');
  require('./controllers/question.controller');
  require('./services/api.service');
  require('./services/cacheengine.service')
  // require('./services/tiny.services');
  // require('./services/cacheEngineService');
  require('./directives/directive');
