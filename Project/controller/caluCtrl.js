app.controller('caluCtrl', function($scope){
$scope.message2 = "form & ng-change & ng-model Example";

	$scope.funding = {startingEstimate : 0};

	calNeeded = function(){
		$scope.funding.needed = $scope.funding.startingEstimate * 10;
	}

	$scope.$watch('funding.startingEstimate', calNeeded);

	$scope.computeNeeded = function() {
		$scope.needed = $scope.startingEstimate * 10;
	}

	$scope.requestFunding = function(){
		window.alert("Hello Funder!");
	};


});