(function(){
	var app = angular.module('mainApp', ['ngMaterial']);
	app.controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
		$http({method:'GET', url: '../data/profile.json'}).then(function success(data){
			$scope.profile = data;
		},
		function fail(err){
			console.log(err);
		})
	}])
	app.controller('portfolioCtrl', ['$scope', '$http', function ($scope, $http) {
		$http({method:'GET', url: '../data/portfolio.json'}).then(function success(data){
			$scope.work = data.data.ch.work;
			$scope.practice = data.data.ch.practice;
		},
		function fail(err){
			console.log(err);
		})		
	}])
})()