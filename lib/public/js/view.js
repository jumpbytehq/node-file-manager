var FMApp = angular.module('FMApp', ['ur.file']);

FMApp.controller('FileManagerViewCtr', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    var FMView = this;
    var relPath = localStorage.getItem('selectedFileName');
    FMView.data = '';
    $http.get('api' + relPath, { params: { type: 'ReadFile' } }, { headers: { 'Content-Type': 'text/plain' } })
      .success(function (data) {
        FMView.data = data;
      })
      .error(function (data, status) {
        alert('Error: ' + status + data);
      });
  }
]);
