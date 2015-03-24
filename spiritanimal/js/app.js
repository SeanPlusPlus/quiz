'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', function ($scope, helloService) {

    var request = {'method': 'get', 'resource': 'quiz.json'};
    helloService.async(request).then(function(response) {
      $scope.quiz = response.data;
    });

    var reset = function(answers, index) {
      for (var i = 0, j = answers.length; i < j; i++) {
        if (i !== index) {
          if (answers[i].status === 'success') {
            answers[i].status = null;
            return;
          }
        }
      }
    }

    $scope.ans = function(question, answer, idx) {
      reset(question.answers, idx);
      if (answer.status === 'success') {
        answer.status = null;
      }
      else {
        answer.status = 'success';
      }
      console.log(question);
      console.log(answer);
      console.log(answer.status);
    };
  }]);
