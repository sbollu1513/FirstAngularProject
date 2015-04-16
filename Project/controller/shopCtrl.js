var messages = "You did awesome so far!";
app.controller('shopCtrl', function($scope){
	$scope.items = [
		{title: 'Paint Pots', quantity: 8, price: 3.95},
		{title: 'Polka dots', quantity: 17, price: 12.95},
		{title: 'Pebbles', quantity: 5, price: 6.95}
	];

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	}

	$scope.message = messages;

	$scope.youCheckedIt = true;
});