var controller = angular.module('angie-goapi.controller.home', []);

controller.controller('angie-goapi.controller.home', ['$scope', 'GApi',
    function homeCtl($scope, GApi) {
      GApi.executeAuth('tagmanager', 'accounts.list').then(function(data) {
        $scope.accounts = data.accounts;
      });
    }
]);
