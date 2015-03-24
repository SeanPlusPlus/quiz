'use strict';

var hello = angular.module('hello', ['hello.controllers', 'hello.services']);
angular.module('hello.controllers', []).
  controller('MainCtrl', ['$scope', 'helloService', function ($scope, helloService) {

    var request = {'method': 'get', 'resource': 'quiz.json'};
    helloService.async(request).then(function(response) {
      $scope.quiz = response.data;
    });

    $scope.ans = function(question, answer) {
      console.log(question);
      console.log(answer);
    };
  }]);
