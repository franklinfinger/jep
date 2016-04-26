var _ = require('underscore');

angular
  .module('jep')
  .controller('HomeController', HomeController);
    // ApiService.getCategories().then(function(data){
    //   $scope.categories = data;
    // })


  HomeController.$inject = ["$scope", "$http", "$q", "$location","$rootScope", "ApiService"];




  function HomeController($scope, $http, $q, $location, $rootScope, ApiService) {
    $rootScope.score = 0;
    var vm = this;
//Thanks Brandon Hare for providing the genius needed to complete the following
    ApiService.getCategories(6)
      .then(function(categories){
        console.log(categories);
        vm.categories = categories;
        vm.categories.forEach(function(el){
          for(i=0;i<5;i++){
            el.data.clues[i].value = 200 * (i + 1);
            
          }
      })
    })
  }
