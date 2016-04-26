angular
  .module('jep')
  .directive('jeopardyReader', function(){
  // .directive('jeopardyReader', function(){
    return {
      templateUrl: './jepApp/templates/jeopardy-reader.html',
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
        var beepOne = $("audio-jep")[0];
        $(".navbar h1")
        .mouseenter(function() {
        beepOne.play();
        console.log("why", beepOne)
        });

        $scope.disableBtn = function(id){
          $('button.'+id).prop('disabled', true);
          $('button.'+id).toggle();
          $('#' +id).modal("hide")

        }
        $scope.shit = function(id){
          $("div." + id).toggle();
        }
      }
    }
  })
