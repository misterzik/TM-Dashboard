var controller = angular.module('angie-goapi.controller.containers.expand', []);
controller.controller('angie-goapi.controller.containers.expand', ['$scope', 'GApi', '$state', '$stateParams',
    function containerCtl($scope, GApi, $state, $stateParams) {

        $scope.id = $stateParams.containerId;

        var params = {
            accountId: '997725872',
            containerId: $stateParams.containerId
        };

        GApi.executeAuth('tagmanager', 'accounts.containers.get', params).then(function(data) {
            $scope.taggin = data;
        });

        GApi.executeAuth('tagmanager', 'accounts.containers.tags.list', params).then(function(data) {
            $scope.taggins = data.tags;
        });

        GApi.executeAuth('tagmanager', 'accounts.containers.versions.list', params).then(function(data) {
            $scope.env = data.containerVersion;

            function findMax(env) {
                var result = null;
                for (var i = 0; i < env.length; i++) {
                    var name = env[i];
                    if (result == null || name.fingerprint > result.fingerprint) {
                        result = name;
                    }
                }
                return result;
            }

            $scope.name = findMax($scope.env);
        });

        GApi.executeAuth('tagmanager', 'accounts.containers.environments.list', params).then(function(data) {
            $scope.envi = data.environments;
        });


        $scope.removeTag = function(event) {

            $scope.id = event;

            var paramsX = {
                accountId: '997725872',
                containerId: $stateParams.containerId,
                tagId: $scope.id
            };

            GApi.executeAuth('tagmanager', 'accounts.containers.tags.delete', paramsX).then(function(resp) {
                alert('You just Erased Tag ID #,' + event + ',Please Check Tag Manager by Clicking Tag Manager button next to Container Title and Publish.');
                $state.reload();
                //console.log($scope.id);
                //$state.go('containersid');
            });
        }

    }
]);