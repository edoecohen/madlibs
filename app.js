angular.module("app", [])
	.controller("MainCtrl", function($scope) {
		$scope.words=[];
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

		$scope.showMad = false;

		$scope.submit = function() {
			if ($scope.myForm.$valid) {
				$scope.showMad = true;
			};
		};

		$scope.empty = function() {
			$scope.words.length = 0;
			$scope.showMad = false;
			$scope.myForm.$setPristine(true);
		};
	});