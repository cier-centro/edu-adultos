'use strict'
angular.module('snippet', [])
.controller('CsvTable1Ctrl', ["$scope", "$http", function($scope, $http){
	//$scope.test = ":v";
	$http.get("https://raw.githubusercontent.com/cier-centro/edu-adultos/master/data/tabla1.csv").then(function(response) {
		var rows = response.data.split("\n").map(function(rowString){
			return rowString.split(",");
		});
		$scope.t1 = {};
		$scope.t1.header = rows[0];
		console.log(rows);
		$scope.t1.data = rows.splice(1);
	}, function(response, error){
		console.log(response);
	})
}]).
.controller('CsvTable4Ctrl', ["$scope", "$http", function($scope, $http){
	//$scope.test = ":v";
	$http.get("https://raw.githubusercontent.com/cier-centro/edu-adultos/master/data/tabla4.csv").then(function(response) {
		var rows = response.data.split("\n").map(function(rowString){
			return rowString.split(",");
		});
		$scope.t1 = {};
		$scope.t1.header = rows[0];
		console.log(rows);
		$scope.t1.data = rows.splice(1);
	}, function(response, error){
		console.log(response);
	})
}])