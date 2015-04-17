
var app = angular.module('myApp', []);

app.controller('indexCtrl', function($scope){
    $scope.items = [
        {id: '1', title: 'Home'},
        {id: '2', title: 'About'},
        {id: '3', title: 'Help'},
        {id: '4', title: 'Help1'}
    ]

    $scope.Hello = "Hello Mr.";

    $scope.message = "Two Way Data Binding Example";

});
