describe('gDrive', function() {
  describe('internalCtrl', function() {
    var $rootScope, $controller, deferred;

    beforeEach(module('gDrive'));

    beforeEach(inject(function(_$rootScope_, _$controller_, $state, httpTestHelper) {
      $rootScope = _$rootScope_;
      $controller = _$controller_;

      $controller('internalCtrl', {
        '$scope': $rootScope.$new(),
        '$state': $state
      });

      deferred = httpTestHelper.mockHttpRequests();
    }));

    it('should hook controller', inject(function() {
      expect($controller).toBeDefined();
    }));
  });
});
