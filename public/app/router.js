var router = angular.module('angie-goapi.router', []);

router
    .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);

router
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/#!/login");
        }
    ]);

router
    .config(['$stateProvider',
        function($stateProvider) {

            $stateProvider

                .state('login', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'partials/login.html',
                        controller: 'angie-goapi.controller.login',
                    },
                },
            })

            .state('home', {
                url: '/',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.home',
                        templateUrl: 'partials/home.html',
                    },
                },
            })

            .state('profile', {
                url: '/profile',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.home',
                        templateUrl: 'partials/profile.html',
                    },
                },
            })

            .state('logout', {
                url: '/logout',
                views: {
                    '': {
                        templateUrl: 'partials/logout.html',
                    },
                },
            })

            .state('containers', {
                url: '/containers',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.containers',
                        templateUrl: 'partials/containers-more.html',
                    },
                    'ads': {
                        templateUrl: 'partials/insanen-core.html',
                    },
                },
            })

            .state('containers-more', {
                url: '/containers-more',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.containers',
                        templateUrl: 'partials/containers.html',
                    },
                    'ads': {
                        templateUrl: 'partials/insanen-core.html',
                    },
                },
            })

            .state('containersid', {
                url: '/containers/{containerId}',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.containers.expand',
                        templateUrl: 'partials/containers-expand.html',
                    },
                },
            })

            .state('tags', {
                url: '/tags',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.tags',
                        templateUrl: 'partials/tags.html',
                    },
                },
            })

            .state('tags-more', {
                url: '/tags-more',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.tags',
                        templateUrl: 'partials/tags-more.html',
                    },
                },
            })

            .state('variables', {
                url: '/variables',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.variables',
                        templateUrl: 'partials/variables.html',
                    },
                },
            })

            .state('variables-more', {
                url: '/variables-more',
                views: {
                    '': {
                        controller: 'angie-goapi.controller.variables',
                        templateUrl: 'partials/variables-more.html',
                    },
                },
            })

        }
    ])