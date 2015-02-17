angular.module('search.services', [])
    .factory("searchService", function ($http) {
        return {
            all: function() {
                return $http.get('libros.json');
            },       
            get: function(searchId) {
                return $http.get('libros.json'); 
            	 
            }
        }
});