(function() {
  'use strict';

  angular
    .module('gDrive')
    .factory('httpTestHelper', httpTestHelper, ['$q', '$httpBackend']);

  function httpTestHelper($q, $httpBackend) {
    var service = {
      mockHttpRequests: mockHttpRequests
    };

    return service;

    function mockHttpRequests() {
      $httpBackend.when('GET', '/auth/google').respond('Stubbed method');

      $httpBackend.expectGET('/auth/google');
    }
  }
}());
