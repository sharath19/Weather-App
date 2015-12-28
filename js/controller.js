var myApp= angular.module('myApp',[]);
myApp.controller('Rendersdata', function renderdata($scope,$http){
 
 $scope.submit = function() {
   			$scope.text=  document.getElementById('search-box').value ;
   			var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ $scope.text +'&appid=73b59da4a0aef80899ab8e4e8c1dae3a';

		    $http.get(url).success(function(data){
		         $scope.weather = data;
		         var text = data.weather;
		         var obj = JSON.stringify(text);
				$scope.mweather = obj;
				
		    })
   
  }  
})