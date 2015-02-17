angular.module('starter.controllerSearch', ['ionic','search.services'])

.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

})
.controller('MyCtrl', function($scope, searchService,$http) {
  // don't be scared by the image value, its just datauri
    $scope.items = [];
    searchService.all().success(function(results) {
            $scope.items = results;
    });
  
})

.controller('searchDetailCtrl', function ($scope, $stateParams,searchService) {
    searchService.get($stateParams.searchId).success(function(result) {
            $scope.item = result[$stateParams.searchId-1];
     });
 });




var app = angular.module('starter.plunker', [])

.factory('githubApi', function($http){
  return {
    getJasonMore: function(){
      return $http.get('https://api.github.com/users/jasonmore');
    }
  }
})

.controller('MainCtrl', function($scope, githubApi, $http) {
  $scope.name = 'World';
  
  githubApi.getJasonMore().success(function(data){
    $scope.data = data;
  })
});

