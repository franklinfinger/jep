angular
  .module('jep')
  .directive('jeopardyReader', function(){
    return {
      templateUrl: '../templates/jeopardy-reader.html',
      restrict: 'E',
      scope: {
        question: '='

      },
      controller: function($rootScope,$scope){
        console.log('i shoulf have 6');
        $scope.addScore = function(input, answer, val){
          console.log('clicked btn',input);
          if(input === answer){
            $rootScope.score += val;
          }else{
            $rootScope.score -= val;
          }
        };
        $scope.disableBtn = function(id){
          $('button.'+id).prop('disabled', true);
          $('button.'+id).toggle();
          $('#' +id).modal("hide")

            // $(".modal-footer " +id).toggle('hide');
            // $(".modal-footer " +id).toggle('show');


        }
        $scope.shit = function(id){
          $("div." + id).toggle();
        }
      }
    }
  })
