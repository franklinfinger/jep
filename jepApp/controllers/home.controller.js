var _ = require('underscore');

angular
  .module('jep')
  .controller('HomeController', function($scope, $http, $q, $location, $rootScope, ApiService, CacheEngine) {
    $rootScope.score = 0;
    // ApiService.getCategories().then(function(data){
    //   $scope.categories = data;
    // })
//Thanks Brandon Hare for providing the genius needed to complete the following
    ApiService.getCategories(6)
      .then(function(categories){
        console.log(categories);
        $scope.categories = categories;
        $scope.categories.forEach(function(el){
          if(el.data.clues_count > 5 ){
            el.data.clues = _.first((el.data.clues), 5);
          }
          for(i=0;i<5;i++){
            el.data.clues[i].value = 200 * (i + 1);
          }
        })
      })
    });
