var myApp;
(function (myApp) {
    'use strict';
    angular.module(myApp.appModuleId, [
        myApp.shellModuleId,
        myApp.homeModuleId,
        myApp.dataModuleId,
        myApp.commonModuleId,
        'ui.router',
        'ngCookies'
    ])
        .constant('applicationConfig', {
        DataApiUrl: '/api'
    })
        .config(myApp.LoggerConfiguration)
        .config(myApp.ExceptionHandlerConfiguration)
        .config(myApp.ApplicationConfiguration)
        .run(Run);
    function Run($rootScope, $state, $stateParams) {
        $rootScope["$state"] = $state;
        $rootScope["$stateParams"] = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if (angular.isDefined(toState.data)) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $rootScope["pageTitle"] = toState.data.pageTitle + ' | MyApp';
                }
            }
        });
    }
    Run.$inject = ['$rootScope', '$state', '$stateParams'];
})(myApp || (myApp = {}));
