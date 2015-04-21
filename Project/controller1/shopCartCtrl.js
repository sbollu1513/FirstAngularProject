var app1 = angular.module('myApp1', []);

var items = [
			{id:1, name: 'Chocolate', price:'1', quantity:'5'},
			{id:2, name: 'MilkShake', price:'2', quantity:'10'},
			{id:3, name: 'Ice Cream', price:'3', quantity:'15'},
			];

app1.controller('shopCartCtrl', function($scope){
		$scope.bill = {};

		$scope.items = items;

		$scope.totalCart = function(){
			var total = 0;
			for(var i = 0, len = $scope.items.length; i < len; i++){
				total = total + $scope.items[i].price * $scope.items[i].quantity;
			}

			return total;
		}

		$scope.subtotal = function() {
			return $scope.totalCart() - $scope.bill.discount;
		};

		function calculateDiscount(newValue, oldValue, scope){
			$scope.bill.discount = 	newValue > 100 ? 10 : 0;
		}
		$scope.$watch($scope.totalCart, calculateDiscount);
});