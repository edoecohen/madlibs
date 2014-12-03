var app = angular.module("app", []);

app.controller("MainCtrl", function($scope) {
  $scope.words=["{{ male name }}", "{{ job title }}", "{{ tedious task }}", "{{ dirty task }}", "{{ celebrity }}", "{{ useless skill }}", "{{ adjective }}", "{{ obnoxious celebrity }}", "{{ huge number }}"];
})