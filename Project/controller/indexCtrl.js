
var app = angular.module('myApp', []);

app.controller('indexCtrl', function($scope){
    $scope.items = [
        {id: '1', title: 'Home'},
        {id: '2', title: 'Cart'},
        {id: '3', title: 'Help'},
        {id: '4', title: 'Help1'}
    ]

    $scope.Hello = "Hello Mr.";

    $scope.message = "Two Way Data Binding Example";

    $scope.changeMessageText = "HAHAHAH";

    $scope.changeColorRed = function(){
		$scope.changeMessageText = "I am Red";    	
    	$scope.isError = true;
    	$scope.isWarning = false;
    };

    $scope.changeColorYellow = function(){
    	$scope.changeMessageText = "I am Yellow";
    	$scope.isError = false;
    	$scope.isWarning = true;
    };

});
