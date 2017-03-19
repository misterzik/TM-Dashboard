var controller = angular.module('angie-goapi.controller.containers', []);

controller.controller('angie-goapi.controller.containers', ['$scope', 'GApi', '$state', '$rootScope', '$stateParams',
    function containerCtl($scope, GApi, $state, $stateParams, $rootScope) {
      $scope.currentPage = 0;
      $scope.pageSize = 16;
      $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
     var params = {
        accountId: 'YOUR-ACCOUNT-CONTAINER-ID',
      };
      
      var params2 = {
        accountId: 'YOUR-SECOND-ACCOUNT-CONTAINER-ID',
      };
      
      GApi.executeAuth('tagmanager', 'accounts.containers.list', params).then(function(data) {
        $scope.taggin = data.containers;
        $scope.numberOfPages=function(data){
                return Math.ceil($scope.taggin.length / $scope.pageSize);
        }
      });

      GApi.executeAuth('tagmanager', 'accounts.containers.list', params2).then(function(data2) {
        $scope.taggin2 = data2.containers;
      });
      
    }
]);
