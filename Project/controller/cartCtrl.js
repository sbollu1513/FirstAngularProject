var carts = [
	{name: 'Soap', price:'2', quantity:2},
	{name: 'Water', price:'4', quantity:2},
	{name: 'Juice', price:'3', quantity:2}
	];
	
app.controller('cartCtrl', function($scope){
	$scope.message3 = "Add and Remove Cart Example";
	$scope.carts = carts;
	$scope.addToCart = function(cart){
		$scope.carts.push(cart);
	};

	$scope.removeFromCart = function(index){
		$scope.carts.splice(index,1);		
	};
});