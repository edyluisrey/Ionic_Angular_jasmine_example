describe('Unit: PlaylistsCtrl', function() {
	// Load the module with ContainerContactCtrl, add your module name in here!
	beforeEach(module('starter'));

	var ctrl, scope;

	// inject the $controller and $rootScope services
	// in the beforeEach block
	beforeEach(inject(function($controller, $rootScope) {

		// create a new scope that's a child of the $rootScope
		scope = $rootScope.$new();

		// create the controller
		ctrl = $controller('PlaylistsCtrl', {
			$scope: scope
		});
	}));
	it('should have defined the playlists',
	function() {
		expect(scope.playlists).toBeDefined();
	});

	it('should have 6 playlists',
	function() {
		 expect(scope.playlists).toBeDefined();
         expect(scope.playlists.length).toBe(6);
	});

	it('should have a cool title',
	function() {
		 expect(scope.title).toBeDefined();
         expect(scope.title).toBe("Playlists");
	});
})

describe('Unit: AppCtrl', function() {
	// Load the module with ContainerContactCtrl, add your module name in here!
	beforeEach(module('starter'));

	var ctrl, scope;

	// inject the $controller and $rootScope services
	// in the beforeEach block
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller('AppCtrl', {
			$scope: scope
		});

	}));
	it('should have an initial state',
	function() {
		expect(ctrl).toBeDefined();
	});

	// it('should show a modal when login',
	// function() {
 //        scope.modal = jasmine.createSpy("modal show spy");
 //        scope.login();
 //        expect(scope.modal).toHaveBeenCalled();
	// });
})