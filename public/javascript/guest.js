function setTime(){
   var ymd = function() {
   var yyyy = d.getFullYear().toString();
   var mm = (d.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = d.getDate().toString();
   return yyyy + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + (dd[1]?dd:"0"+dd[0]); // padding
  };
	var d = new Date();
	var time = d.toLocaleTimeString();
	document.getElementById('time').value = ymd() + '  ' + time;
};





(function(){
	var app = angular.module('app', ['ngRoute']);
	var commentsNum;
	app.controller('CommentController', ['$scope', '$http', function($scope, $http){
    	$http({url: 'db-comments'}).success(function (comments) {
        	$scope.comment = comments.reverse();
            commentsNum = comments.length;
     	});
    	$scope.currentPage = 0;
    	$scope.pageSize = 6;
    	$scope.numberOfPages= function(){
          if(commentsNum){
        	return Math.ceil(commentsNum / $scope.pageSize);     
          }else{
            return 1;
          }           
        }
    app.filter('reverse', function() {
    	return function(items) {
    		return items.slice().reverse();
  			};
		});
	}]);

})();




