describe('search service', function() {
  var $httpBackend;

  beforeEach(module('search.services'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get("$httpBackend");
    $httpBackend.when("GET", "libros.json")
        .respond(200, {value:"goodValue"});
  }));

  afterEach(function () {
    $httpBackend.flush()
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('searchService successful http request', function () {
    it('.value should be "goodValue"', inject(function (searchService) {

        searchService.all().success(function(response) {
          expect(response.value).toEqual("goodValue");
        }).error( function(response) {
          //should not error with $httpBackend interceptor 200 status
          expect(false).toEqual(true);
        });

    }));
  });


});


describe('search service 2', function() {
  var httpBackend, SearchService;

  beforeEach(module('search.services'));
  
   beforeEach(inject(function (searchService,$httpBackend) {
     SearchService= searchService;
     httpBackend = $httpBackend;
     httpBackend.when("GET", "libros.json").respond(200, {value:"goodValue"});
   }));  

  afterEach(function () {
    httpBackend.flush()
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('.value should be "goodValue"', function () {

        SearchService.all().success(function(response) {
          expect(response.value).toEqual("goodValue");
        }).error( function(response) {
          //should not error with $httpBackend interceptor 200 status
          expect(false).toEqual(true);
        });

  });


});