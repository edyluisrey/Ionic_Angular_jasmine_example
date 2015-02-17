angular.module('search.services', [])
    .factory("searchService", function ($http) {
        return {
            all: function() {
                return $http.get('http://192.168.2.196/api_phonegap/api.php?action=libros');
            },       
            get: function(searchId) {
                return $http.get('http://192.168.2.196/api_phonegap/api.php?action=libros'); 
            	 
            }
        }
});