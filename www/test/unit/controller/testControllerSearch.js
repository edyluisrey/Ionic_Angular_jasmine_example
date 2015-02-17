describe('test controller search', function() {
	beforeEach(module('starter.controllerSearch'));
   
    var MyCtrl, $scope;

    describe('Unit: MyCtrl', function() {
	
	    beforeEach(inject(function($controller, $rootScope) {
		   scope = $rootScope.$new();
		   MyCtrl = $controller('MyCtrl', {
			        $scope: scope
		   });

	    }));

	    it('should have an initial state MyCtrl',function() {
		   expect(MyCtrl).toBeDefined();
	    });
	
    });
});



describe('mocking service http call', function() {
  beforeEach(module('starter.plunker'));

  var MainCtrl, $scope;

  describe('with spies', function() {
    beforeEach(inject(function($controller, $rootScope, githubApi) {
      $scope = $rootScope.$new();

      spyOn(githubApi, 'getJasonMore').and.callFake(function() {
        return {
          success: function(callback) { callback({things: 'and stuff'})}
        };
      });

      MainCtrl = $controller('MainCtrl', { $scope: $scope, githubApi: githubApi });
    }));
    
    it('should set data to "things and stuff"', function() {
      expect($scope.data).toEqual({
        things: 'and stuff'
      });
    });
  
  });

  describe('with httpBackend', function() {
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      $scope = $rootScope.$new();
      
      $httpBackend.when('GET', 'https://api.github.com/users/jasonmore')
        .respond({things: 'and stuff'});

      MainCtrl = $controller('MainCtrl', { $scope: $scope });
      $httpBackend.flush();
    }));
    
    it('should set data to "things and stuff"', function() {
      expect($scope.data).toEqual({
        things: 'and stuff'
      });
    });
  });
});


