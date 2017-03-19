var app = angular.module('angie-goapi', [
    'ngCookies',
    'ui.router',
    'angular-google-gapi',
    'angie-goapi.router',
    'angie-goapi.controller'
]);

app.filter('startFrom', function() {
    return function(input, start) {
    if (!input || !input.length) { return; }
    start = +start; //parse to int
    return input.slice(start);
  }
});

app.run(['GAuth', 'GApi', 'GData', '$state', '$rootScope', '$window', '$cookies',
    function(GAuth, GApi, GData, $state, $rootScope, $window, $cookies) {

        $rootScope.gdata = GData;
        
        var CLIENT = '317283145038-a7iu6o1feltjvhj8ak5epff53shfghr9.apps.googleusercontent.com';
        var BASE = 'https://cloud-endpoints-gae.appspot.com/_ah/api';

        GApi.load('tagmanager', 'v1');
        GAuth.setClient(CLIENT, {immediate: false});
        GAuth.setScope('https://www.googleapis.com/auth/tagmanager.edit.containers https://www.googleapis.com/auth/tagmanager.readonly');

        var currentUser = $cookies.get('userId');

        if(currentUser) {
            GData.setUserId(currentUser);
            GAuth.checkAuth().then(
                function () {
                    if($state.includes('login'))
                        $state.go('home');
                },
                function() {
                    $state.go('login');
                    //$window.location.href = '/login';
                }
            );
        } else if(currentUser === false){
            $state.go('login');
        }

        $rootScope.logout = function() {
            GAuth.logout().then(function () {
                $cookies.remove('userId');
                $state.go('login');
            });
        };
    }
]);
