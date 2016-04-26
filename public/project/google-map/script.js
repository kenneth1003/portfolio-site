function myJsonMethod(){

}
$.ajax({
	url: "park.json",
	// url: "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=8f6fcb24-290b-461d-9d34-72ed1b3f51f0",
	// url: "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=8f6fcb24-290b-461d-9d34-72ed1b3f51f0/",
    type: 'GET',
    //crossDomain: true,
    // dataType: 'jsonp',
    // jsonp: false,
    // jsonpCallback: "myJsonMethod",
	success: function(data){
		park = data.result.results;
	},
	error: function(e){
		console.log(e);
	}
})
var park;
// (function(google){
// 	var app = angular.module('app', [])
// 	app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

// 		$http({method:'GET', url: 'park.json' }).then(function success(data){
// 			console.log(data.data.result.results[0])
// 			addMarker()
// 		},
// 		function fail(err){
// 			console.log(err);
// 		})
// 	}])
// }(window.google))

var map;
var center_lat = 25.06;
var center_lng = 121.56
var image;
function addMarker(){
	var parks = []
	var len = park.length;
	var parks_info = [];
	for(i = 0; i < len;i++){
	  (function(i){
	  	setTimeout(function(){
		  parks.push(new google.maps.Marker({
		    map: map,
		    animation: google.maps.Animation.DROP,
		    position: {lat: parseFloat(park[i].Latitude), lng: parseFloat(park[i].Longitude)},
		    icon: 'park-icon.png'
		  }));
		  parks_info.push(new google.maps.InfoWindow({
		    content: park[i].ParkName,
		    buttons: {
		    	close: {
		    		visible: false
		    	}
		    }
		  }))
		  parks[i].addListener('mouseover', 
		  	function(){
		  		parks_info[i].open(map, parks[i])
		  	}
		  )
		  parks[i].addListener('mouseout', 
		  	function(){
		  		parks_info[i].close(map, parks[i])
		  	}
		  )
		  }, i*80)   	
	  }(i))
	}
	

}
function initMap(){
	var option = {
		center: {
			lat: 25.06,
			lng: 121.56
		},
		zoom: 12
	}
	var where = document.getElementById('map')
	  map = new google.maps.Map(where, option)
}