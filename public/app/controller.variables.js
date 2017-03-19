var controller = angular.module('angie-goapi.controller.variables', []);

controller.controller('angie-goapi.controller.variables', ['$scope', 'GApi', '$state', '$stateParams',
    function variablesCtl($scope, GApi, $state, $stateParams) {

      $scope.currentPage = 0;
      $scope.pageSize = 12;

      var params = {
        accountId: 'YOUR-ACCOUNT-CONTAINER-ID',
        containerId: 'YOUR-CONTAINER-ID'
      };
      
      GApi.executeAuth('tagmanager', 'accounts.containers.variables.list', params).then(function(data) {
        $scope.variables = data.variables;
        $scope.numberOfPages=function(data){
                return Math.ceil($scope.variables.length/$scope.pageSize);
        }
      });
    }
]);
