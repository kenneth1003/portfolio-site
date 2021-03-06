(function(){
	var app = angular.module('mainApp', ['ngMaterial', 'ngRoute']);
	app.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {

	}])	
	app.controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
		$http({method:'GET', url: '../data/profile.json'}).then(function success(data){
			$scope.profile = data;
		},
		function fail(err){
			console.log(err);
		})
	}])
	app.controller('portfolioCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.bg = 99;
		$scope.desc = '';
		$scope.setLink = function(link, bg, desc){
			$scope.link = link;
			$scope.bg   = bg;
			$scope.desc = desc;
		}

		$http({method:'GET', url: '../data/portfolio.json'}).then(function success(data){
			$scope.work = data.data.ch.work;
			$scope.en_work = data.data.ch.work;
			$scope.practice = data.data.ch.practice;
		},
		function fail(err){
			console.log(err);
		})		
	}])	
	app.controller('skillCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
		$scope.ch =true;
	}])	
	app.controller('headerCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.location =  window.location.pathname;
		$http({method:'GET', url: '../data/nav.json'}).then(function success(data){
			$scope.about = data.data.ch.about;
		},
		function fail(err){
			console.log(err);
		})		
	}])
})()