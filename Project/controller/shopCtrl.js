var messages = "ng-repeat & ng-click Examples";



app.controller('shopCtrl', function($scope){
	$scope.items = [
		{id:1, title: 'Paint Pots', quantity: 8, price: 3.95},
		{id:2, title: 'Polka dots', quantity: 17, price: 12.95},
		{id:3, title: 'Pebbles', quantity: 5, price: 6.95}
	];

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	};

	$scope.message1 = messages;

	$scope.youCheckedIt = true;

});