var myApp= angular.module('myApp',[]);
myApp.controller('Rendersdata', function renderdata($scope,$http){
  	var mylat= 0; var mylong = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            mylat = position.coords.latitude; 
            mylong = position.coords.longitude;
            var myurl = 'http://api.openweathermap.org/data/2.5/weather?lat='+ mylat +'&lon='+ mylong+'&appid=2de143494c0b295cca9337e1e96b00e0';
	 		$http.get(myurl).success(function(data) {
	        	$scope.weather = data;
		    });
        });
	}
	$scope.submit = function() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ $scope.text +'&appid=73b59da4a0aef80899ab8e4e8c1dae3a';
	    $http.get(url).success(function(data) {
	        $scope.weather = data;		
	    });
	}  
});