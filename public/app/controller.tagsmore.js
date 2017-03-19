var controller = angular.module('angie-goapi.controller.tagsmore', []);

controller.controller('angie-goapi.controller.tagsmore', ['$scope', 'GApi', '$state', '$stateParams',
    function tagsmoreCtl($scope, GApi, $state, $stateParams) {
      
      var params = {
        accountId: 'YOUR-ACCOUNT-CONTAINER-ID',
        containerId: 'YOUR-CONTAINER-ID',
        'id': $stateParams.id
      };

      $scope.test = $stateParams.id;

    	GApi.executeAuth('tagmanager', 'accounts.containers.tags.list', params).then(function(data) {
            $scope.staggins = data;
        });
    	}
]);
