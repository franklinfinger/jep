var _ = require('underscore');
angular
  .module('jep')
  .service('ApiService', function($http, $q,$cacheFactory){

    var url = 'http://jservice.io/api/category?id=';

    var urlArr = [url, url, url, url, url, url];
    function getCategories(){
      var promises = [];
    urlArr.forEach(function(el){
      var rando = Math.floor(Math.random() * 1200);
      var promise = $http.get(el + rando);
      promises.push(promise);
    })
    return $q.all(promises);
  }
    return {
      getCategories: getCategories

    }
  })
