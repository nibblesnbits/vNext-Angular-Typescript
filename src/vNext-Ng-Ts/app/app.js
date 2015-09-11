var myApp;
(function (myApp) {
    'use strict';
    angular.module(myApp.appModuleId, [
        myApp.shellModuleId,
        myApp.homeModuleId,
        myApp.dataModuleId,
        myApp.commonModuleId,
        'ui.router'
    ])
        .config(Config)
        .run(Run);
    function Config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        // greetingProvider.setGreeting("sup?");
    }
    Config.$inject = ['$urlRouterProvider'];
    function Run($rootScope, $state, $stateParams) {
        $rootScope["$state"] = $state;
        $rootScope["$stateParams"] = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data)) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $rootScope["pageTitle"] = toState.data.pageTitle + ' | Troi';
                }
            }
        });
    }
    Run.$inject = ['$rootScope', '$state', '$stateParams'];
})(myApp || (myApp = {}));
