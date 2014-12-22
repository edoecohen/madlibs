angular.module("app", ["ngAnimate"])
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

		$scope.showMad = true;

		$scope.submit = function() {
			if ($scope.myForm.$valid) {
				$scope.showMad = false;
			};
		};

		$scope.empty = function() {
			$scope.showMad = true;
			$scope.words.length = 0;
			$scope.myForm.$setPristine(true);
		};

	});