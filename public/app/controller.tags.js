var controller = angular.module('angie-goapi.controller.tags', []);

controller.controller('angie-goapi.controller.tags', ['$scope', 'GApi', '$state', '$stateParams',
    function tagsCtl($scope, GApi, $state, $stateParams) {
      $scope.currentPage = 0;
      $scope.pageSize = 8;

      var params = {
        accountId: 'YOUR-ACCOUNT-CONTAINER-ID',
        containerId: 'YOUR-CONTAINER-ID'
      };
      
      GApi.executeAuth('tagmanager', 'accounts.containers.tags.list', params).then(function(data) {
        $scope.staggin = data.tags;
        $scope.numberOfPages=function(){
            return Math.ceil($scope.staggin.length / $scope.pageSize);
        }
      });
    }
]);
