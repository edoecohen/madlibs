angular.module("app", [])
	.controller("MainCtrl", function($scope) {
		$scope.words=["{{ male name }}", "{{ job title }}", "{{ tedious task }}", "{{ dirty task }}", "{{ celebrity }}", "{{ useless skill }}", "{{ adjective }}", "{{ obnoxious celebrity }}", "{{ huge number }}"];
		$scope.gender="male";
		$scope.$watch('gender', function () {
			if ($scope.gender == "male") {
				$scope.output1 = "he";
				$scope.output2 = "his";
				$scope.output3 = "him";
			} else {
				$scope.output1 = "she";
				$scope.output2 = "her";
				$scope.output3 = "her";
			}
		});
	});