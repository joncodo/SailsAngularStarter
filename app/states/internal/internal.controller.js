(function () {
  'use strict';

  angular.module('gDrive').config(function($stateProvider) {
    $stateProvider.state('internal', {
      url: '/internal',
      templateUrl: 'states/internal/internal.template.html',
      resolve: {},
      controller: 'internalCtrl'
    });
  });

  angular.module('gDrive').controller('internalCtrl', function($location, $http, $scope) {

  });
})();
