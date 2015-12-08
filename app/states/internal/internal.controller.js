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
    $scope.internal = {state: 'recent'};

    $scope.getRecent = function() {
      var gdriveFilesUrl = 'https://www.googleapis.com/drive/v2/files?access_token=' + $location.search().access_token +
        '&maxResults=50' +
        '&orderby=recency desc' +
        '&q=(not mimeType = "application/vnd.google-apps.folder") and trashed = false';

      $http.get(gdriveFilesUrl).then(function(gdriveItems) {
        $scope.internal.items = gdriveItems.data.items;
        console.log(gdriveItems.data.items);
      });
    };

    $scope.getSharedWithMe = function() {
      var gdriveFilesUrl = 'https://www.googleapis.com/drive/v2/files?access_token=' + $location.search().access_token +
        '&maxResults=50' +
        '&orderby=recency desc' +
        '&q=(not mimeType = "application/vnd.google-apps.folder") and trashed = false';

      $http.get(gdriveFilesUrl).then(function(gdriveItems) {
        $scope.internal.items = gdriveItems.data.items;
        console.log(gdriveItems.data.items);
      });
    };

    $scope.getRecent();
  });
})();

