'use strict'
angular.module('snippet', [])
.controller('CsvTableCtrl', ["$scope", "$http", function($scope, $http){
	//$scope.test = ":v";
	$http.get("../data/tabla1.csv").then(function(response) {
		var rows = response.data.split("\n").map(function(rowString){
			return rowString.split(",");
		});
		$scope.header = rows[0];
		console.log(rows);
		$scope.data = rows.splice(1);
	}, function(response, error){
		console.log(response);
	})
}])