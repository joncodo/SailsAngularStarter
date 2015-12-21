(function () {
  'use strict';

  angular.module('gDrive').config(function ($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'states/login/login.template.html',
      resolve: {},
      controller: 'loginCtrl'
    });
  });

  angular.module('gDrive').controller('loginCtrl', function ($scope, $http) {
    $scope.testAngular = function(){
      $scope.myVar = 'Hello World Angular!';
    };
  });
})();
